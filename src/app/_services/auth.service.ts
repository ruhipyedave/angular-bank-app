import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from "../../environments/environment";
import { ApiService } from "./api.service";
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	path = '/auth';
	constructor(
		private apiService: ApiService
	) {

	}

	login(payload) {
		return this.apiService.post(`${this.path}/login`, payload);
	}

	signUp(payload) {
		return this.apiService.post(`${this.path}/signup`, payload);
	}

	verify(token) {
		return this.apiService.get(`${this.path}/verify?token=token`);
	}

}
