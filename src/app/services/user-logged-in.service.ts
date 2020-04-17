import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedInService {
  flag: Boolean = false;

  constructor() { }

  isLoggedIn():Boolean {
    return this.flag;
  }

  set(value):void {
    sessionStorage.setItem("userLoggedIn", JSON.stringify(value));
    this.flag = true;
  }

  remove():void {
    sessionStorage.removeItem("userLoggedIn");
    this.flag = false;
  }
}
