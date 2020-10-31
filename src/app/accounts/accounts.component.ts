import { Component, OnInit, ViewChild } from '@angular/core';
import { ACCOUNT_TYPES, ACCOUNT_STATUS, ACCOUNT, USER } from "../_constants";
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  ACCOUNT_TYPES = ACCOUNT_TYPES;
  user;
  USER = USER;
  customers = [];
  currencies = {};
  constructor(
    private accService: AccountService,
    private userServeice: UserService,

  ) { }
  accForm = new FormGroup({
    email: new FormControl(''),
    currency: new FormControl(''),
  });
  error: string = "";
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    let query = `?limit=0&offset=0`;
    this.userServeice.listUsers(query).subscribe((res: any) => {
      if (!res.data || !res.data.length) {
        this.customers = []
      }
      this.customers = res.data;
    });

    this.accService.listCurrencies(query).subscribe((res: any) => {
      if (!res.data) {
        this.currencies = {}
      }
      this.currencies = res.data;
    });
  }

  
  createAccount() {
    const payload = {
      currency: this.accForm.value.currency,
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
