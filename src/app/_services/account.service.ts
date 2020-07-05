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

  getAccById(id) {
    return this.apiService.get(`${this.path}/:${id}`, true);
  }

  listAccounts(query) {
    const basePath = `${this.path}/${query}`;
    return this.apiService.get(basePath, true);
  }

  createAccount(payload) {
    return this.apiService.post(`${this.path}/`, payload, true);
  }

  changeStatus(id: string, payload: object) {
    return this.apiService.patch(`${this.path}/${id}`, payload, true);
  }

}
