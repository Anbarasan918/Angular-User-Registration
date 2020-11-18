import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { User } from '../model/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
user:User={name:"",phoneNo:null,age:null,email:"",password:""};
users:User[]=[];
@Output ("altitude") value=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  entrydata(){
    let copiedUser = Object.assign({},this.user)
 this.users.push(copiedUser);
 this.value.emit(this.users)
  }

}
