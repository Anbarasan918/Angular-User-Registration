import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class PassdataService {
users:User={name:"",phoneNo:null,age:null,email:"",password:""}
users:user[]=[];
  constructor() {

   }
}
