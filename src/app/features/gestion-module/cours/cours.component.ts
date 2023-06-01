import {Component} from '@angular/core';
import {ProfesseurService} from "../../../data/services/professeur.service";
import {ClasseService} from "../../../data/services/classe.service";
import {CoursService} from "../../../data/services/cours.service";
import {CoursModel} from "../../../data/types/cours.model";
import {ProfesseurModel} from "../../../data/types/professeur.model";
import {ClasseModel} from "../../../data/types/classe.model";
import {ModulesService} from "../../../data/services/module.service";

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent {
  courss: any [] = [];
  valideReq: any;
  nombreHeureGlobal: any;
  professeur: any;
  professeurs: any [] = [];
  classes: any ;
  classe: any;
  modulee: any;
  modules: any [] = [];

  constructor(private moduleService: ModulesService, private professeurService: ProfesseurService, private classeService: ClasseService, private coursService: CoursService) {
    this.loadDatas();
  }

  editerCours(cours: any) {

  }

  supprimerCours(cours: any) {

  }

  planifierCours() {
    if (this.professeur && this.classe && this.nombreHeureGlobal) {
      this.valideReq = false;
      let prof: ProfesseurModel = this.professeurs.find((p) => p.id == this.professeur);
      let classe = this.classes.filter((c:any) => c.id == this.classe);
      let module = this.modules.find((m) => m.id == this.modulee);
      let cours: CoursModel = {
        nombreHeureGlobal: this.nombreHeureGlobal,
        professeur: {
          id: prof.id,
        },
        module: {
          id: module.id,
        },
        classes: [{
          id: classe.id,
        }]
      }
      console.log(cours);
      let coursCreated: any;
      this.coursService.addCours$(cours).subscribe((data) => {
        coursCreated = data;
        this.coursService.affecterProfesseur$(coursCreated.id , prof.id).subscribe((data) => {
            console.log(data);
          } , (error) => {
            console.log(error);
          }
        );
      }, (error) => {
        this.valideReq = true;
        console.log(error);
      });

    }
    this.valideReq = true;


  }

  annuler() {

  }

  loadDatas() {
    this.professeurService.professeurs$.subscribe((data) => {
      this.professeurs = data;
    });
    this.classeService.getAllClasses().subscribe((data) => {
      this.classes = data;
    });
    this.coursService.coursList$.subscribe((data) => {
      this.courss = data;
    });
    this.moduleService.modules$.subscribe((data) => {
      this.modules = data;
    });


  }
}
