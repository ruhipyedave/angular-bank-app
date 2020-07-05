import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from "../_services/auth.service";
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(
    private authServeice: AuthService,
    private router: Router
  ) { }

  logInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  error: string = "";

  ngOnInit() {


  }

  login() {
    const payload = {
      email: this.logInForm.value.email,
      password: this.logInForm.value.password
    };

    this.authServeice.login(payload).subscribe(
      (response: any) => {
        // route to home screen
        // store token in local storage
        this.error = "";
        debugger;
        localStorage.setItem('token', response.data.token);
        this.router.navigate(["/dashboard"]);
      },
      (error: HttpErrorResponse) => {
        let apiError: any = error.error
        if (apiError && apiError.error && apiError.error.length && apiError.error[0] && apiError.error[0].message) {
          this.error = apiError.error[0].message;
          return;
        }
        this.error = 'Error Occured'
      }
    );
  }

}
