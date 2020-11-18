import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { FormsModule } from '@angular/forms'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PassdataService } from './passdata.service';
import { UserdataeditComponent } from './userdataedit/userdataedit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UsersListComponent,
    UserdataeditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, NgbModule
  ],
  providers: [PassdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
