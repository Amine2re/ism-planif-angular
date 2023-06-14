import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  model: any = {
    username: '',
    password: ''
  };
  constructor(private authService: AuthService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl("/gestion");
      
    }
  }

  onFormSubmit() {
    console.log("onFormSubmit ...")
    console.log("this.model.login ...",this.model.username);
    console.log("this.model.password ...",this.model.password);


    //alert("onSubmit");
    this.authService.login(this.model.username, this.model.password).subscribe(
      {
        next: (res) => {
          //return url in angular
           let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/gestion';
          this.router.navigateByUrl(returnUrl).then(r => {
          }); 
        },
        error: (err) => {
          alert("impossible de se connecter mail ou pass incorrect ")
        }
      }
    );
  }
}
