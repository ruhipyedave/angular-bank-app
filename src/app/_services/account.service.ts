import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  path = '/accounts';

  constructor(
    private apiService: ApiService
  ) {

  }

  getAccountDetails() {
    return this.apiService.get(`${this.path}`, true);
  }

  listCurrencies(query) {
    const basePath = `/currencies/${query}`;
    return this.apiService.get(basePath, true);
  }

  createAccount(payload) {
    return this.apiService.post(`${this.path}/`, payload, true);
  }


}
