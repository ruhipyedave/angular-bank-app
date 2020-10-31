import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { environment as env } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseURL = `${env.apiPath}`;
  constructor(private httpClient: HttpClient) { }
  get(subURL: string, isAuth?: boolean) {
    this.baseURL = `${env.apiPath}`;
    const authReqd: boolean = isAuth ? isAuth : false;
    const options = { headers: this.getHeaders(authReqd) };
    return this.httpClient.get(`${this.baseURL}${subURL}`, options);
  }


  post(url, payload, isAuth?: boolean) {
    this.baseURL = `${env.apiPath}`;
    const authReqd: boolean = isAuth ? isAuth : false;
    const subURL: string = url;
    const datum: any = payload || {};
    const options = { headers: this.getHeaders(authReqd) };
    return this.httpClient.post(`${this.baseURL}${subURL}`, datum, options);
  }


  patch(url, payload, isAuth?: boolean) {
    this.baseURL = `${env.apiPath}`;
    const authReqd: boolean = isAuth ? isAuth : false;
    const subURL: string = url;
    const datum: any = payload || {};
    const options = { headers: this.getHeaders(authReqd) };
    return this.httpClient.patch(`${this.baseURL}${subURL}`, datum, options);
  }


  private getHeaders(isAuthNeeded: boolean = true) {
    let headers = new HttpHeaders();
    const authToken: string = localStorage.getItem("token");
    if (isAuthNeeded && authToken) {
      headers = headers.append("Authorization", "Bearer " + authToken);
      // headers = headers.append("token", "Bearer " + authToken);
    }
    return headers;
  }
}
