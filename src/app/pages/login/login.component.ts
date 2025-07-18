import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  
  constructor(
    private api: ApiService, 
    private router:Router,
    private ds: DataService
    ) { }

  emailId: string;
  password: string;
  isLoggedIn:boolean=false;
  loginMessage:string;
  

  loginUser(){
    let body;
    body = {
      "email": this.emailId,
      "phone": "",
      "phoneCode": "965",
      "password": this.password,
      "deviceToken": "",
      "deviceType": "",
      "deviceModel": "",
      "appVersion": "",
      "osVersion": ""
    };

    const queryParams = {
      lang: 'en',
      currencyCode: 'KW'
    };

    this.api.post('v1/user/login', body, queryParams).subscribe({
      next: (response : any) => {
        if(response?.status == 1){
          this.isLoggedIn=true;
          this.loginMessage=response?.message;
          this.ds.emailId=response?.data?.email;
          this.ds.firstName=response?.data?.firstName;
          this.ds.lastName=response?.data?.lastName;
          this.ds.phoneCode=response?.data?.phoneCode;
          this.ds.phone=response?.data?.phone;
          setTimeout(() => {
            this.router.navigate(['account']);
          }, 1200);
          
        } else {
          this.isLoggedIn=false;
          this.loginMessage="Access Denied!"
        }
        
      },
      error: (error: any) => {
        
      }
    })
  }

  validate(){
    if(this.emailId && this.password){
      this.loginUser();
    }
    else{
      alert("Kindly enter email id and password!");
    }
  }

}
