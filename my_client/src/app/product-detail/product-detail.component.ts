import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../service/cart.service';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productInfo: any;

  constructor(private _activatedRoute: ActivatedRoute, private _service: ProductserviceService, private cartService: CartService, private _toast: ToastrService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('id');
      //Get product info -> Call API
      this.loadData(id)
    })
  }

  loadData(id: any) {
    this._service.getProductInfo(id).subscribe({
      next: data => this.productInfo = data,
      error: err => console.log(err)
    })
  }
  addtocart(p: any) {
    this.cartService.addtoCart(p);
  }
  Notification() {
    this._toast.success('Thêm vào giỏ hàng thành công');
  }
}
