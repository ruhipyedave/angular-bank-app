import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { USER } from "../_constants";
@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  constructor(
    private userServeice: UserService,
    private router: Router
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
      { label: "Accounts", link: "./accounts" },
      { label: "Transactions", link: "./transactions" },
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
        debugger;
        const user = response && response.data ? response.data : {};
        if (user.role == USER.roles.staff) {
          this.menuOptions = this.staffMenu;
        }
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(["/dashboard"]);
      },
      (error: HttpErrorResponse) => {
        debugger
        this.router.navigate(["/login"]);
      }
    )
  }

}
