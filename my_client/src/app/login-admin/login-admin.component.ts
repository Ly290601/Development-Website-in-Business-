import { Admin } from './../models/admin';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  public adForm:any;
  admin:Admin= new Admin();
  constructor(private _formBuilder: FormBuilder,private _service:AdminService,private _toast:ToastrService) { }

  ngOnInit(): void 
  {
    this.adForm = this._formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      pass:['',[Validators.required]]
    }) 
  }
  loginAdmin(form:NgForm){  
    this._service.logAdmin(this.admin).subscribe(res=>{
    let resData=JSON.parse(JSON.stringify(res));       
    if(resData.message==="success")
    {
    this._toast.success("Đăng nhập quản trị thành công!","ĐĂNG NHẬP")
     setTimeout(function() {window.location.replace("/admin")},2000);
    }
    if(resData.message==="unsuccess")
    {
      this._toast.error("Sai mật khẩu!","ĐĂNG NHẬP")
    }
    if(resData.message==="fail")
    {
      this._toast.error("Email không phải email quản trị!","ĐĂNG NHẬP")
      setTimeout(function() {window.location.reload()},2000);
    }
  })}

get email(){
  return this.adForm.controls['email']
}
get pass(){
  return this.adForm.controls['pass']
}
}