import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, ResultsUsers } from '../model/user_d';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private arrayUsers: User[] = [];

  constructor(private _httpClient: HttpClient) { }

  public async getUser(){
    const username = this.getUserSessionStorage();
    const endpoint = `https://api.github.com/users/${username}`;
    const response = await this._httpClient.get<User>(endpoint).toPromise();
    if(response){
      this.arrayUsers.push(response);
      const index = this.arrayUsers.length - 1;
      // console.log(this.arrayUsers[index]);
      // console.log(this.arrayUsers);
      this.setUserSessionStorage("Users", JSON.stringify(this.arrayUsers));
    }
    return response;
  }

  public getUserSessionStorage(): String{
    const username = window.localStorage.getItem("username");
    return username != null? username: "";
  }

  public setUserSessionStorage(nameUser: String, user:String){
    window.localStorage.setItem(`${nameUser}`, `${user}`);
  }

}

