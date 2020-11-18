import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-userdataedit',
  templateUrl: './userdataedit.component.html',
  styleUrls: ['./userdataedit.component.scss']
})
export class UserdataeditComponent implements OnInit {
edituser={};
  constructor(public  activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.edituser=this.activatedRoute.queryParams.subscribe(params=>{
      params;
      console.log(params);
    });
    console.log();
  }
  editeddatas(){
    
  }

}
