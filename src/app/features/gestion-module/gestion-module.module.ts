import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnneeScolaireComponent } from './annee-scolaire/annee-scolaire.component';
import {GestionRoutingModule} from "./gestion-module-routing.module";
import {FormsModule} from "@angular/forms";
import { ClasseComponent } from './classe/classe.component';
import { ProfesseursComponent } from './professeurs/professeurs.component';
import { SalleComponent } from './salle/salle.component';
import { SemestreComponent } from './semestre/semestre.component';
import { ModuleComponent } from './module/module.component';
import { CoursComponent } from './cours/cours.component';



@NgModule({
  declarations: [
    AnneeScolaireComponent,
    ClasseComponent,
    ProfesseursComponent,
    SalleComponent,
    SemestreComponent,
    ModuleComponent,
    CoursComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    FormsModule
  ]
})
export class GestionModuleModule { }
