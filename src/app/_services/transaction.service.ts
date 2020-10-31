import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  path = '/transactions';

  constructor(
    private apiService: ApiService
  ) {

  }

  getTransactionById(id) {
    return this.apiService.get(`${this.path}/:${id}`, true);
  }

  listTransactions(query) {
    const basePath = `${this.path}/${query}`;
    return this.apiService.get(basePath, true);
  }
}
