import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactionForm = new FormGroup({
    type: new FormControl(''),
    amt: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

}
