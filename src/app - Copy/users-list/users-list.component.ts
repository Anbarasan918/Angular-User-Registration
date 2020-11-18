import { Component, OnInit,Input } from '@angular/core';
import { getMaxListeners } from 'process';
import { User } from '../model/user'
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
@Input("details") users:User[]=[];

   
  constructor() { }

  ngOnInit(): void {
  }
  
}
