import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchUserComponent } from './pages/search-user/search-user.component';
import { UsersComponent } from './pages/users/users.component';
import { RegisterComponent } from './pages/register/register.component';
import { RepositoriesComponent } from './pages/repositories/repositories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './shareds/header/header.component';
import { CardsComponent } from './pages/repositories/components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsProfileComponent } from './pages/repositories/components/cards-profile/cards-profile.component';
import { SkeletonComponent } from './shareds/skeleton/skeleton.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    UsersComponent,
    RegisterComponent,
    RepositoriesComponent,
    HeaderComponent,
    CardsComponent,
    CardsProfileComponent,
    SkeletonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
