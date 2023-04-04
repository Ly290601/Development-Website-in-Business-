import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/products';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  product: Product = new Product();

  productList: any;

  errMess: string="";

  constructor(private _service: ProductserviceService, private _toast: ToastrService) { }

  ngOnInit(): void {
    this.getProducts()
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

  submitData(form:NgForm){
    if(this.product._id==''){
      this._service.postProduct(this.product).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res));
        if(resData.message === "success"){
          this._toast.success('Thêm thành công!', "Thành công!");
          this.getProducts();
        }else{
          alert("Thất bại!")
        }
      })
    } else{
      this._service.updateProduct(this.product._id, this.product).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res));
        if(resData.message === "success"){
          this._toast.success('Cập nhật thành công!', "Thành công!");
          this.onReset();
          this.getProducts();
        }else{
          alert("Thất bại!")
        }
      })
    }
  }

  onReset(form?: NgForm){
    if(form){
      form.reset();
    }
    this.product = new Product();
  }
  
  delete(id: any, form: NgForm){
    if(confirm("Bạn có muốn xóa không?") == true){
      this._service.deleteProduct(id).subscribe(res =>{
        let resData = JSON.parse(JSON.stringify(res));
          if(resData.message === "success"){
            this._toast.success('Xóa thành công!', "Đã xóa!", {
              timeOut: 2000,
            });
            this.onReset(form);
            this.getProducts();
          }else{
            alert(resData.message)
          }
      });
    }
  }

  edit(data: Product){
    this.product = data;
  }
}
