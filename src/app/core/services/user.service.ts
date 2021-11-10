import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user_d';
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
    this.arrayUsers.push(response);
    if(response){
      const index = this.arrayUsers.length - 1;
      console.log(this.arrayUsers[index])
      this.setUserSessionStorage(username, this.arrayUsers[index]);
    }
    return response;
  }

  public getUserSessionStorage(): String{
    const username = window.sessionStorage.getItem("username");
    return username != null? username: "";
  }

  public setUserSessionStorage(nameUser: String, user:User){
    window.sessionStorage.setItem(`${nameUser}`, `${user}`);
  }

}

