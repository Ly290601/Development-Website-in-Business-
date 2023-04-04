import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service/cart.service';
import { Cart } from '../models/cart';
import { Product } from '../models/products';
import { User } from '../models/users';
import { customValidator } from '../Validators/check.validator';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  user: User = new User;
  public logForm: any;
  cart: Cart = new Cart();
  cartList: any;
  errMess: string = "";
  public products: any = [];
  public grandTotal !: number;
  constructor(private cartService: CartService, private _service: ShoppingCartService, private _toast: ToastrService, private _router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })

    this.logForm = this._formBuilder.group({
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/((09|03|07|08|05)+([0-9]{8})\b)/g)]],
      username: ['', [Validators.required, Validators.minLength(2), customValidator(/\@|\#|\%|\$|\^|\&/g)]],
      address: ['', [Validators.required, Validators.minLength(10)]]
    })
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }

    this.getCarts();
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }

  inc(p: Product) {
    // console.log(p.qty)
    p.qty += 1
  }

  dec(p: Product) {
    // console.log(p.qty)
    if (p.qty > 1)
      p.qty -= 1
  }

  Notification() {
    this._toast.success('Đặt hàng thành công');
  }
  get username() {
    return this.logForm.controls['username']
  }
  get address() {
    return this.logForm.controls['address']
  }

  get phone() {
    return this.logForm.controls['phone']
  }

  getCarts() {
    this._service.getCartList().subscribe(
      {
        next: (data) => {
          this.cartList = data,
            console.log(this.cartList)
        },
        error: (err) => this.errMess = err.message
      }
    )
  }
  delete(id: any) {
    if (confirm("Bạn có muốn xóa không?") == true) {
      this._service.deleteProduct(id).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res));
        if (resData.message === "success") {
          this._toast.success('Xóa thành công!', "Đã xóa!", {
            timeOut: 2000,
          });
          this.getCarts();
          this.onReset();
        } else {
          alert(resData.message)
        }
      });
    }
  }
  onReset() {
    this.cartList = new Cart();
  }
}

