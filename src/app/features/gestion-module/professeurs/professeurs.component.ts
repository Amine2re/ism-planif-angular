import {Component} from '@angular/core';
import {ProfesseurService} from "../../../data/services/professeur.service";
import {ProfesseurModel} from "../../../data/types/professeur.model";

@Component({
  selector: 'app-professeurs',
  templateUrl: './professeurs.component.html',
  styleUrls: ['./professeurs.component.css']
})
export class ProfesseursComponent {
  professeurs: ProfesseurModel[] = [];
  valideReq: any;
  nom: any;
  prenom: any;
  specialite: any;
  grade: any;

  constructor(private professeurService: ProfesseurService) {
    this.professeurList();
    this.valideReq = false;
  }

  editerProfesseur(professeur: any) {

  }

  supprimerProfesseur(professeur: any) {

  }

  ajouterProfesseur() {
    //validation
    if (this.nom === undefined || this.nom === '') {
      alert('Le nom est obligatoire');
      return;
    }
    if (this.prenom === undefined || this.prenom === '') {
      alert('Le prenom est obligatoire');
      return;
    }
    if (this.specialite === undefined || this.specialite === '') {
      alert('La specialite est obligatoire');
      return;
    }

    if (this.grade === undefined || this.grade === '') {
      alert('Le grade est obligatoire');
      return;
    }

    const professeur: ProfesseurModel = {
      nom: this.nom,
      prenom: this.prenom,
      specialite: this.specialite,
      grade: this.grade
    };
    this.professeurService.addProfesseur(professeur).subscribe(
      (professeur) => {
        this.professeurs.push(professeur);
        this.nom = '';
        this.prenom = '';
        this.specialite = '';
        this.grade = '';
      }
    );
  }

  annuler() {

  }

  professeurList() {
    this.professeurService.professeurs$.subscribe(
      professeurs => {
        this.professeurs = professeurs;
      },
      error => {
        console.log('error', error);
        alert('Erreur lors du chargement des professeurs')
      }
    );
  }
}
