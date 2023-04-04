import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/users';
import { UserserviceService } from '../service/userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public logForm:any;
user:User= new User();
unique_id:any
  constructor(private _formBuilder: FormBuilder,private _service:UserserviceService,private _toast:ToastrService, private router:Router) { }
  ngOnInit(): void 
  {
    this.logForm = this._formBuilder.group({
      phone:['',[Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/((09|03|07|08|05)+([0-9]{8})\b)/g)]],
      pass:['',[Validators.required]]
    }) 
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
loginUser(form:NgForm){
  this._service.logUser(this.user).subscribe(res=>{
    let resData=JSON.parse(JSON.stringify(res));  
    if(resData.message==="success")
    {
    this._toast.success("Đăng nhập thành công!","ĐĂNG NHẬP")
     setTimeout(function() {window.location.replace('/account')},2000);
    // this.router.navigate(['/account',phone]);
    // window.location.replace("/account");
    }
    if(resData.message==="unsuccess")
    {
      this._toast.error("Sai mật khẩu!","ĐĂNG NHẬP")
    }
    if(resData.message==="fail")
    {
      this._toast.error("Số điện thoại chưa được đăng ký!","ĐĂNG NHẬP")
      setTimeout(function() {window.location.reload()},2000);
    }
  })
}
  get phone(){
    return this.logForm.controls['phone']
  }
  get pass(){
    return this.logForm.controls['pass']
  }

  }


