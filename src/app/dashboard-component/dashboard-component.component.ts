import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { USER } from "../_constants";
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
  user;
  account = {
    no: "",
    balance: "",
    currency: ""
  };
  constructor(
    private userServeice: UserService,
    private router: Router,
    private accService: AccountService,
  ) { }
  opened: boolean = true;
  menuOptions: {
    link: string,
    label: string
  }[] = [
      { label: "Accounts", link: "./accounts" },
      { label: "Transactions", link: "./transactions" }
    ]

  staffMenu: {
    link: string,
    label: string
  }[] = [
      { label: "Create Customer", link: "./customers/create" },
      { label: "Transactions", link: "./transactions" },
      { label: "Accounts", link: "./accounts" },
      { label: "Customers", link: "./customers" },
    ]
  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    this.userServeice.getUserProfile().subscribe(
      (response: any) => {
        // route to home screen
        // store token in local storage
        this.user = response && response.data ? response.data : {};

        switch (this.user.role) {
          case USER.roles.staff:
            this.menuOptions = this.staffMenu;
          
          default:
            // get users account details and display
            this.accService.getAccountDetails().subscribe((res: any) => {
              if (!res.data) {
                return;
              }
              this.account = res.data;
            });

        }
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(["/dashboard"]);
      },
      (error: HttpErrorResponse) => {
        this.router.navigate(["/login"]);
      }
    )
  }

}
