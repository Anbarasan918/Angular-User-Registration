import { Component } from '@angular/core';
import { User } from './model/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users:User[]=[];
  title = 'My App';
  callts(user){
     this.users=user;
  }
  callfunction(datashare){
    this.users=datashare;
  }    
}

