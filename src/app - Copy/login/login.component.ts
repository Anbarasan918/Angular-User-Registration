 import { Component, OnInit,Input } from '@angular/core';
import { UsersListComponent } from '../users-list/users-list.component';
import { User } from '../model/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
@Input("sharetoilogin") users:User[]=[];
loginEmail;
loginPassword;
showError=false;
showuserdetails={};
  constructor() { }

  ngOnInit(): void {
  }

  showdetails(){
    let matchfound;
            matchfound=false;
      for(let i=0;i<this.users.length;i++) {
        if(this.users[i].email==this.loginEmail){
          if(this.users[i].password==this.loginPassword){
                   matchfound=true;
                  this.showuserdetails=this.users[i];
          }
        }
      }

      if(matchfound==false){
        this.showError=true;
      }else{
        this.showError=false;
      }
      
      
  }
}
