import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {finalize, tap} from 'rxjs';

import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected   apiUrl : string = environment.apiUrl;



  constructor(private http: HttpClient, private  router : Router) { }

  login(email: string, password: string) {


  }

  private setSession() {
    // Set the time that the access token will expire moment
    // const expiresAt =   moment().add(authResult.expires_in, 'second');
    // localStorage.setItem('access_token', authResult.access_token);
    // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );

  }

  clearLocalStorage() {
    localStorage.clear();
  }

  logout() {
    this.http
      .post<unknown>(`${this.apiUrl}/auth/logout`, {})
      .pipe(
        finalize(() => {
          this.clearLocalStorage();
          // this.stopTokenTimer();
          this.router.navigate(['/']);
        })
      ).subscribe();
  }

  public isLoggedIn() {
    //return moment().isBefore(this.getExpiration()) && localStorage.getItem('access_token') != null;
  }

  isLoggedOut() {
    //return !this.isLoggedIn();
  }

  getExpiration() {
    // const expiration = localStorage.getItem("expires_at");
    // const expiresAt = JSON.parse(expiration!);
    // return moment(expiresAt);
  }



}
