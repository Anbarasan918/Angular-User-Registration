import { Component, OnInit, } from '@angular/core';

import { PassdataService } from '../passdata.service';
import { User } from '../model/user';
import  { Router,NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users : User[]=[];
   
  constructor(public passdataService:PassdataService,public router:Router) {}


  ngOnInit(): void {
    this.users=this.passdataService.users
  }
  edit(){
  
   let navigationExtras:NavigationExtras={
      queryParams:{"user":this.users}
    };   
    this.router.navigate(['user-dataedit'],{state:{edit:navigationExtras}
  });
   
  }
  
}
