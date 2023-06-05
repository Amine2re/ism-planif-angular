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
  nomSemestre: any;
  duree: any;

  constructor(private semestreService: SemestreService) {
  this.semestresList();
  }

  annuler() {

  }

  ajouterSemestre() {
    //validation
    if (this.nomSemestre == null || this.duree == null) {
      this.valideReq = true;
    }
    else {
      this.valideReq = false;
      let semestre: SemestreModel = {
        nomSemestre: this.nomSemestre,
        duree: this.duree
      };
      this.semestreService.addSemestre$(semestre).subscribe((semestre) => {
        this.semestres.push(semestre);
        this.nomSemestre = '';
        this.duree = '';
      });
    }
  }

  semestresList() {
    this.semestreService.getAllSemestre().subscribe((semestres) => {
        this.semestres = semestres;
      }
    );
  }
}
