import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: "",
    component: RegisterComponent
  },
  {
    path: "users",
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
