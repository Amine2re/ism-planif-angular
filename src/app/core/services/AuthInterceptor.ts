import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(request)).pipe(
      catchError((error: HttpErrorResponse) => {
        // Afficher l'erreur ici, par exemple :
        console.error('Une erreur s\'est produite :', error);
        if(error.status === 401){
          alert('token expiré ... ');
          this.authService.logout();
        }

        // Renvoyer une nouvelle erreur pour être capturée par l'observateur
        return throwError(error);
      })
    );
  }
  

  addAuthToken(request: HttpRequest<any>) {
    const token = this.authService.getToken();

    console.log("token found = " , token);

    return request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,      
        }
    })
  }
}
