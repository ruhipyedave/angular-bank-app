import { Component, OnInit, ViewChild } from '@angular/core';
import { USER } from "../_constants";
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
@Component({
	selector: 'app-customers',
	templateUrl: './customers.component.html',
	styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
	//material table variables used in html
	dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	USER_ROLES = USER.roles;
	USER_STATUS = USER.status;
	constructor(
		private userServeice: UserService,
		private router: Router,
	) { }
	columnsToDisplay = ['name', 'email', "phone", "role", "status"];
	limit = 10;
	offset = 0;
	pageIndex = 1;
	length = 0;
	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.listUsers();
	}

	listUsers(event?: PageEvent) {
		if (event) {
			this.limit = event.pageSize;
			this.offset = this.limit * event.pageIndex;
		}
		let query = `?limit=${this.limit}&offset=${this.offset}`;
		this.userServeice.listUsers(query).subscribe((res: any) => {
			if (!res.data || !res.data.length) {
				this.dataSource = new MatTableDataSource<any>([]);
			}

			if (res.count) {
				this.length = res.count;
			}
			this.dataSource = new MatTableDataSource<any>(res.data);
		});
	}
}
