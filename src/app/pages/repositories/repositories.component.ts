import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user_d';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.sass']
})
export class RepositoriesComponent implements OnInit {

  public data: User | undefined;

  constructor(private _userService: UserService) {

   }

  ngOnInit(): void {
    this._initializeData();
    this._initializeObservers();
    setTimeout(()=>{
      console.log(this.data?.name);
    }, 5000);
  }

  private _initializeData(){
    this._userService.getUser()
  }

  private _initializeObservers(){
    this._userService.getUser().then(res => this.data = res);
  }
}
