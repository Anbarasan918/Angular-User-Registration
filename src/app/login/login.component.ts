import { Component, OnInit } from '@angular/core';
import { UsersListComponent } from '../users-list/users-list.component';
import { User } from '../model/user'
import { Router } from '@angular/router';
import { PassdataService } from '../passdata.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

selecteduser;
loginEmail;
loginPassword;
showError=false;
showuserdetails={};
  constructor(private passdataservice:PassdataService,public router:Router) { }
   
  ngOnInit(): void {
  
  }

  showdetails(){
    let matchfound;
            matchfound=false;
      for(let i=0;i<this.passdataservice.users.length;i++) {
        if(this.passdataservice.users[i].email==this.loginEmail){
          if(this.passdataservice.users[i].password==this.loginPassword){
                   matchfound=true;
                  this.showuserdetails=this.passdataservice.users[i];
          }
        }
      }

      if(matchfound==false){
        this.showError=true;
      }else{
        this.showError=false;
      }
      
      
  }
  edit(){
     this.router.navigateByUrl('/user-list');
  }
}
