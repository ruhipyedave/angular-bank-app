import { Component, OnInit } from '@angular/core';
import { ACCOUNT_TYPES, USER } from "../../_constants";
import { AccountService } from '../../_services/account.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-create-acc',
  templateUrl: './create-acc.component.html',
  styleUrls: ['./create-acc.component.css']
})
export class CreateAccComponent implements OnInit {
  ACCOUNT_TYPES = ACCOUNT_TYPES;
  user;
  USER = USER;
  constructor(
    private accService: AccountService
  ) { }
  accForm = new FormGroup({
    email: new FormControl(''),
    type: new FormControl(''),
  });
  error: string = "";

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
  createAccount() {
    const payload = {
      type: parseInt(this.accForm.value.type),
      email: this.accForm.value.email,
    };

    this.accService.createAccount(payload).subscribe(
      (response: any) => {
        // route to home screen
        // store token in local storage
        this.error = "Account created!";
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
