import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public mouseOutImage(){
    let logo = (<HTMLImageElement>document.getElementById("logo"));
    logo.style.animationName = "cursor-out-element";
    logo.style.animationFillMode = "forwards";
    logo.style.animationDuration = "1s";
  }

  public mouseOverImage(){
    let logo = (<HTMLImageElement>document.getElementById("logo"));
    logo.style.animationName = "cursor-in-element";
    logo.style.animationFillMode = "forwards";
    logo.style.animationDuration = "1s";
  }
  public get showButton(){
    if(this._router.url === '/users'){
      return true;
    }
    else{
      return false;
    }
  }

}
