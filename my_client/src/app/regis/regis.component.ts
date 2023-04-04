import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { customValidator, passwordValidator } from '../Validators/check.validator';
import { User } from '../models/users';
import { UserserviceService } from '../service/userservice.service';


@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {
  public regForm: any;
  user: User=new User();
  constructor(private _formBuilder: FormBuilder, private _service: UserserviceService,private _toast:ToastrService) { }

  ngOnInit(): void {
      this.regForm = this._formBuilder.group({
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/((09|03|07|08|05)+([0-9]{8})\b)/g)]],
      username:['',[Validators.required,Validators.minLength(2),customValidator( /\@|\#|\%|\$|\^|\&/g)]],
      useremail:['',[Validators.required,Validators.email]],
      address:['', [Validators.required,Validators.minLength(10)]],
      pass: ['', [Validators.required,Validators.minLength(8)]],
      confirmPass: ['', [Validators.required]]
    },
      { validators: passwordValidator })
  } 
 
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  submitData(form:NgForm){
     this._service.postUser(this.user).subscribe(res=>{
    let resData=JSON.parse(JSON.stringify(res));       
    if(resData.message==="success")
    {
    this._toast.success("Đăng ký thành công!","ĐĂNG KÝ")
     setTimeout(function() {window.location.replace("/home-page")},2000);
    }
    else
    {
      this._toast.error("Tài khoản đã tồn tại!","ĐĂNG KÝ")
      setTimeout(function() {window.location.replace("/login")},2000);
    }
  })
}

  get phone() {
    return this.regForm.controls['phone']
  }
  get username() {
    return this.regForm.controls['username']
  }
  get useremail() {
    return this.regForm.controls['useremail']
  } 
  get address() {
    return this.regForm.controls['address']
  }
  get pass() {
    return this.regForm.controls['pass']
  }
  get confirmPass() {
    return this.regForm.controls['confirmPass']
  }
}



