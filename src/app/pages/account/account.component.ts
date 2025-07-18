import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {
  constructor(
    private ds:DataService,
  ){}

  emailId:string;
  firstName:string;
  lastName:string;
  phoneCode:string;
  phone:string;

  ngOnInit(){
    this.emailId=this.ds.emailId;
    this.firstName=this.ds.firstName;
    this.lastName=this.ds.lastName;
    this.phoneCode=this.ds.phoneCode;
    this.phone=this.ds.phone;
  }
  

}
