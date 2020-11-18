import { TmplAstVariable } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class PassdataService {
  user:User={name:"",email:"",age:null,password:null,phoneNo:null};
  users:User[]=[];
  constructor() {

   }

  getUser(){ 
    return this.users;
  }

}
