import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DataService{
  emailId: string;
  firstName:string;
  lastName:string;
  phoneCode:string;
  phone:string;
  nationality:string;
}