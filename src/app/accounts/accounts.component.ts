import { Component, OnInit, ViewChild } from '@angular/core';
import { ACCOUNT_TYPES, ACCOUNT_STATUS, ACCOUNT, USER } from "../_constants";
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  //material table variables used in html
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ACCOUNT_TYPES = ACCOUNT_TYPES;
  ACCOUNT_STATUS = ACCOUNT_STATUS;
  ACCOUNT = ACCOUNT;
  constructor(
    private accService: AccountService,
    private router: Router,
  ) { }
  columnsToDisplay = ['type', 'name', 'email', "phone", "status", "edit"];
  limit = 10;
  offset = 0;
  pageIndex = 1;
  length = 0;
  user;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.list();

    this.user = JSON.parse(localStorage.getItem("user"));
  }

  list(event?: PageEvent) {
    debugger;
    if (event) {
      this.limit = event.pageSize;
      this.offset = this.limit * event.pageIndex;
    }
    let query = `?limit=${this.limit}&offset=${this.offset}`;
    this.accService.listAccounts(query).subscribe((res: any) => {
      if (!res.data || !res.data.length) {
        this.dataSource = new MatTableDataSource<any>([]);
      }

      if (res.count) {
        this.length = res.count;
      }
      this.dataSource = new MatTableDataSource<any>(res.data);
    });
  }

  changeStatus(id: string, status: number) {
    const payload = {
      status
    }

    this.accService.changeStatus(id, payload).subscribe((res: any) => {
      this.list();
    });
  }

}
