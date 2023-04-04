import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userInfo:any;
  constructor(private _service:UserserviceService,private _activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) =>{
      let phone = params.get('phone');
      //Get product info -> Call API
      this.loadData(phone)
    })
  }
  loadData(phone:any){
    this._service.getUserInfo(phone).subscribe({
      next: data => this.userInfo = data,
      error: err => console.log(err)
    })
  }
}
