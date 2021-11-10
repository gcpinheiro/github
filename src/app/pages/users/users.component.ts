import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User, ResultsUsers } from 'src/app/core/model/user_d';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  public data: User | undefined;
  public dataArray: ResultsUsers;
  public loading = false;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._initializeObservers();
  }

  private _initializeObservers(){
    this._userService.getUser().then(res => {
      this.data = res;
      this.loading = true;
      console.log(this.data);
    });
  }

  public saveUsers(){
    this.dataArray.results.push()
  }

  public formatNumberFollowers(followers: any){
    let amount = followers.toString();
    if(amount.length > 3 && amount.length < 7){
      if(amount.length == 4){
        amount = [amount.slice(0, 1) + "," + amount.slice(1, 2) + "K"];
      }
      else if(amount.length == 5){
        amount = [amount.slice(0, 2) + "," + amount.slice(2, 3) + "K"];
      }
      else if(amount.length == 6){
        amount = [amount.slice(0, 3) + "," + amount.slice(3, 4) + "K"];
      }
      return amount;
    }
    else{
      return followers;
    }
  }

  public mouseOutImage(){
    let img = (<HTMLImageElement>document.getElementById("avatar"));
    img.style.animationName = "img-profile-mouse-over";
    img.style.animationFillMode = "forwards";
    img.style.animationDuration = "1s";
  }

  public mouseOverImage(){
    let img = (<HTMLImageElement>document.getElementById("avatar"));
    img.style.animationName = "img-profile";
    img.style.animationFillMode = "forwards";
    img.style.animationDuration = "1s";
  }


}
