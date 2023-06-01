import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AnneeScolaireComponent} from "./annee-scolaire/annee-scolaire.component";
import {ClasseComponent} from "./classe/classe.component";
import {ProfesseursComponent} from "./professeurs/professeurs.component";
import {SalleComponent} from "./salle/salle.component";
import {SemestreComponent} from "./semestre/semestre.component";
import {ModuleComponent} from "./module/module.component";
import {CoursComponent} from "./cours/cours.component";


const routes: Routes = [
  {
    path:"annee-scolaire",
    component: AnneeScolaireComponent
  },
  {
    path:"classes",
    component: ClasseComponent
  },
  {
    path:"professeurs",
    component: ProfesseursComponent
  },
  {
    path:"salles",
    component: SalleComponent
  },
  {
    path:"semestres",
    component: SemestreComponent
  },
  {
    path:"modules",
    component: ModuleComponent
  },
  {
    path:"cours",
    component: CoursComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
