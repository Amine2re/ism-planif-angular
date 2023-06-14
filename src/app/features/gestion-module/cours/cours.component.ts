import {Component} from '@angular/core';
import {ProfesseurService} from "../../../data/services/professeur.service";
import {ClasseService} from "../../../data/services/classe.service";
import {CoursService} from "../../../data/services/cours.service";
import {CoursModel} from "../../../data/types/cours.model";
import {ProfesseurModel} from "../../../data/types/professeur.model";
import {ClasseModel} from "../../../data/types/classe.model";
import {ModulesService} from "../../../data/services/module.service";
import { SemestreService } from 'src/app/data/services/semestre.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent {
  courss: any [] = [];
  valideReq: any;
  nombreHeuresGlobal: any;
  professeur: any;
  professeurs: any [] = [];
  classes: any ;
  classe: any;
  modulee: any;
  semestree: any;
  semestres: any [] = [];
  modules: any [] = [];
  sizeProf :any;
  sizeCours: any;
  indexClasse: any;
  indexSemestre: any;
  sizeModule: number | undefined;


semestre: any;

  constructor(private moduleService: ModulesService, private semestreService: SemestreService ,private professeurService: ProfesseurService, private classeService: ClasseService, private coursService: CoursService) {
    this.loadDatas();
  }

  editerCours(cours: any) {

  }

  supprimerCours(cours: any) {

  }

  planifierCours() {
    if (this.professeur && this.semestre && this.nombreHeuresGlobal) {
      this.valideReq = false;
      let prof: ProfesseurModel = this.professeurs.find((p) => p.id == this.professeur);

     /*  console.log("this.classe to filter ...",this.classes)
      let classe = this.classes.filter((c:any,index:any) => {
        if( c.id == this.classe){
          this.indexClasse = index;
          c.id == this.classe; 
          return this.classes[index];
        }
      });
      console.log("indexClasse found ...",this.indexClasse);
       console.log("classe found ...",this.classes[this.indexClasse].id);
      this.classe = this.classes[this.indexClasse];
      console.log("classe after tre&ate ...",this.classe); */

      let module = this.modules.find((m) => m.id == this.modulee);

      let semestre = this.semestres.find((s,index) =>{
        console.log("semestreFound = ",s);  
        if( s.id == this.semestre){
          this.indexSemestre = index;
          s.id == this.semestre; 
          return this.semestres[index];
        }
      } );


      console.log("semestre ...",semestre)
      let cours: any = {
        nombreHeuresGlobal: this.nombreHeuresGlobal,
        professeur: {
          id: prof.id,
        },
        module: {
          id: module.id,
        },
        semestre: {
          id: semestre.id,
        }
        //,classes:[{}]
      }
      console.log(cours);
      let coursCreated: any;

      this.coursService.addCours(cours).subscribe((data) => {
        coursCreated = data;

        //affection coursToEtudiant commented ...
      /*   this.coursService.affecterProfesseur$(coursCreated.id , prof.id).subscribe((data) => {
            console.log("from affectation ...",data);
          } , (error) => {
            console.log(error);
          }
        ); */
        this.loadDatas();
      }, (error) => {
        this.valideReq = true;
        console.log(error);
      });

    }
    this.valideReq = false;


  }

  annuler() {

  }

  loadDatas() {
    this.professeurService.professeurs$.subscribe((data) => {
      this.professeurs = data;
      this.sizeProf = this.professeurs.length;
    });
    /* this.classeService.getAllClasses().subscribe((data) => {
      this.classes = data;
    }); */
    this.coursService.coursList$.subscribe((data) => {
      console.log("data from allCours __",data);
    
      this.courss = data;
      this.sizeCours = data.length;
    });
    this.moduleService.modules$.subscribe((data) => {
      this.sizeModule  = data.length;
      this.modules = data;
    });

    this.semestreService.semestres$.subscribe((data:any) => {
      console.log("data from semestre __",data);

      this.semestres = data;
    });


  }
}
