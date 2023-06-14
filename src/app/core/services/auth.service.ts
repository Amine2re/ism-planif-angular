import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap} from 'rxjs';

import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ResourceService<any>{
  protected override   apiUrl : string = environment.apiUrl;

  constructor(private http:HttpClient,private router:Router){
    super(http);
   // this.clearLocalStorage();
  }

  login(username: string, password: string) {
    return this.http.post<any>("http://localhost:8080/auth/login", {username, password}).pipe(
      tap(
        next => {
          console.log('next ...',next);
          localStorage.setItem('access_token' , next.access_token);
        }
      )
    );
  }

  login_(username: string, password: string){
    return this.http.post("http://localhost:8080/auth/login",{"username":username,"password":password})
  }


  clearLocalStorage() {
    localStorage.clear();
  }

  logout() {
    /* this.httpClient
      .post<unknown>(`${this.apiUrl}/auth/logout`, {})
      .pipe(
         --//finalize(() => {*/
          this.clearLocalStorage();
          // this.stopTokenTimer();
          this.router.navigate(['/']);
       // })
      //).subscribe();
  }

  public isLoggedIn() {
    return localStorage.getItem('access_token') != null;
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
