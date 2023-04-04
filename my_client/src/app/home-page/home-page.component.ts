import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
import { Product } from '../models/products';
import { CartService } from '../service/cart.service';
import { ProductserviceService } from '../service/productservice.service';
import { BlogService } from '../service/blog.service';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products: any;
  categories: any;
  errMess: string = '';
  blog: Blog = new Blog();
  blogList: any;
  productList: any;

  constructor(private _service: ProductserviceService, private cartService: CartService, private _toast: ToastrService, private _router: Router, private _service1: BlogService) { }


  ngOnInit(): void {
    // this._service.getListProductByCategory5().subscribe((res: any) => {
    //   this.products = res;
    // });
    this._service.getCategoryList().subscribe((res: any) => {
      this.categories = res;
    })
    this.getBlogs()
    this.getProductCategory()
  }
  getBlogs() {
    this._service1.getBlogList().subscribe(
      {
        next: (data) => {
          this.blogList = data,
            console.log(this.blogList)
        },
        error: (err) => this.errMess = err.message
      }
    )
  }
  addtocart(p: any) {
    this.cartService.addtoCart(p);
  }
  Notification() {
    this._toast.success('Thêm vào giỏ hàng thành công');
  }
  onSelect(id: any) {
    this._router.navigate(['/product-detail', id]);
  }
  onSelectBlog(id:any){
    this._router.navigate(['/blog-detail',id]);
  }

  getProductCategory(){
    this._service.getListProductByCategory5().subscribe({
      next: (data) => {
        this.productList = data,
          console.log(this.productList)
      },
      error: (err) => this.errMess = err.message
    })
  }
}
