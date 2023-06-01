import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginLayoutComponent} from "./layout/login-layout/login-layout.component";
import {GestionLayoutComponent} from "./layout/gestion-layout/gestion-layout.component";

const routes: Routes = [
  {
    path:"",
    component:LoginLayoutComponent,
    children:[
      {
        path:'',
        loadChildren : () => import('./features/login-module/login-module.module').then(m => m.LoginModuleModule)
      }
    ]
  },
  {
    path:"gestion",
    component:GestionLayoutComponent,
    loadChildren : () => import('./features/gestion-module/gestion-module.module').then(m => m.GestionModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
