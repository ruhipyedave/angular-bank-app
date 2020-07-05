import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {

  constructor(
    private authServeice: AuthService
  ) { }
  signUpForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  error: string = "";
  ngOnInit() {
  }

  register() {
    const payload = {
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password
    };

    this.authServeice.signUp(payload).subscribe(
      (response: any) => {
        // route to home screen
        // store token in local storage
        this.error = response.data.message;
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
