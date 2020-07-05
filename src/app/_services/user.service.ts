import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path = '/users';
  constructor(
    private apiService: ApiService
  ) {

  }

  getUserProfile() {
    return this.apiService.get(`${this.path}/profile`, true);
  }

  listUsers(query) {
    const basePath = `${this.path}/${query}`;
    return this.apiService.get(basePath, true);
  }
}
