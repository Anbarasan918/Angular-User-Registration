import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { User } from '../model/user';
import { PassdataService } from '../passdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  user:User ={name:"",email:"",age:null,password:null,phoneNo:null};

  constructor(public passdataService:PassdataService,public router:Router) {}

  ngOnInit(): void {
  }
  entrydata(){
      let copiedUser = Object.assign({},this.user);
      this.passdataService.users.push(copiedUser);
     
  }
  login(){
    this.router.navigateByUrl('/login');
  }
}
