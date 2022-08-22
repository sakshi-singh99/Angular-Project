import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  login(uname:string,pword:string)
  {
    if(uname==="Sakshi" && pword==="1234"){
      return 200;
    }else{
      return 403;
    }
  }

  logout(){
  this.router.navigate(['login']);
  }
}
