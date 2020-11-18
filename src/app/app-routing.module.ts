import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserdataeditComponent } from './userdataedit/userdataedit.component';
const routes: Routes = [
  {path:"*",redirectTo:"/register"},
  {path:'register',component:RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'user-list',component:UsersListComponent},
  {path:'user-dataedit',component:UserdataeditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
