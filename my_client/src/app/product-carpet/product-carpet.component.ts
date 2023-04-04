import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/products';
import { CartService } from '../service/cart.service';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-product-carpet',
  templateUrl: './product-carpet.component.html',
  styleUrls: ['./product-carpet.component.css']
})
export class ProductCarpetComponent implements OnInit {

  product: Product = new Product();

  productList: any;

  errMess: string = "";

  searchText: any;

  search_content: boolean = true;

  constructor(private _service: ProductserviceService, private cartService: CartService, private _toast: ToastrService, private _router: Router, private _activatedRoute: ActivatedRoute ) { }

  searchKey: string = "";

  dataPro:any;

  cadID: any;

  ngOnInit(): void {
    this.getProductCategory();
  }

  Notification() {
    this._toast.success('Thêm vào giỏ hàng thành công');
  }

  getProducts() {
    this._service.getProductList().subscribe(
      {
        next: (data) => {
          this.productList = data,
            console.log(this.productList)
        },
        error: (err) => this.errMess = err.message
      }
    )
  }

  search() {
    this.search_content = false
  }

  leave() {
    this.search_content = true
  }

  addtocart(p: any) {
    this.cartService.addtoCart(p);
  }

  onSelect(id: any) {
    this._router.navigate(['/product-detail', id]);
  }

  getProductCategory(){
    this._service.getListProductByCategory().subscribe({
      next: (data) => {
        this.productList = data,
          console.log(this.productList)
      },
      error: (err) => this.errMess = err.message
    })
  }
}
