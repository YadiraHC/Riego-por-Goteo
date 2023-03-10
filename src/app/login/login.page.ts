import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}
  ngOnInit() {}
  logIn(email: any, password: any) {
    this.authService.SignIn(email.value, password.value)
      .then((res):any => {
        this.router.navigate(['dashboard']);          
        /* if(this.authService.isEmailVerified) {
        } else {
          window.alert('Email is not verified')
          return false;
        } */
      }).catch((error):any => {
        window.alert(error.message)
      })
  }
}