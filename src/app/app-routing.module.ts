import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { RepositoriesComponent } from './pages/repositories/repositories.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: "",
    component: RegisterComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "repositories",
    component: RepositoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
