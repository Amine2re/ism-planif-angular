import {Component} from '@angular/core';
import {SemestreModel} from "../../../data/types/semestre.model";
import {SemestreService} from "../../../data/services/semestre.service";

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrls: ['./semestre.component.css']
})
export class SemestreComponent {
  semestres: any;
  valideReq: any;
  numeroSemestre!: string;
  duree: any;
  annee: any;
  numero:any;
  nomSemestre:any;



  constructor(private semestreService: SemestreService) {
  this.semestresList();
  }

  annuler() {

  }

  ajouterSemestre() {
    //validation
    if (this.numeroSemestre == null || this.duree == null) {
      this.valideReq = true;
    }
    else {
      this.valideReq = false;
      let semestre: SemestreModel = {
        numero: this.numeroSemestre,
        nomSemestre:this.nomSemestre,
        duree:this.duree,
        anneeScolaire:null,
        cours: null
      };
      this.semestreService.addSemestre(semestre).subscribe((semestre) => {
        console.log("semestre recu__",semestre);
        this.semestres.push(semestre);
        this.annee = semestre.anneeScolaire;
        this.numero = semestre.numero;
        this.duree = '';
      });
    }
  }

  semestresList() {
    this.semestreService.semestres$.subscribe((semestres) => {
      console.log("semestre recu__",semestres);

        this.semestres = semestres;
      }
    );
  }
}
