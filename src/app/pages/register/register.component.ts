import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {


  constructor( private _router: Router, private _userService: UserService ) { }

  ngOnInit(): void {
  }


  public setUsername(){
    const username = (<HTMLInputElement>document.getElementById("username"));
    window.sessionStorage.setItem('username', username.value);
    this._router.navigate(['/users']);
  }


}
