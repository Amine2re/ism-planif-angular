import {Component} from '@angular/core';
import {AnneeService} from "../../../data/services/annee.service";
import {AnneeModel} from "../../../data/types/annee.model";
import {ClasseService} from "../../../data/services/classe.service";


@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent {
  annee: any;
  fillieres: any = [
    {id: 1, libelle: 'Informatique'},
    {id: 2, libelle: 'Mathématique'},
    {id: 3, libelle: 'Physique'},
    {id: 4, libelle: 'Chimie'},
    {id: 5, libelle: 'Biologie'}
  ];
  filliere: any;
  niveaux: any = [
    {id: 1, libelle: 'Licence 1'},
    {id: 2, libelle: 'Licence 2'},
    {id: 3, libelle: 'Licence 3'},
    {id: 4, libelle: 'Master 1'},
    {id: 5, libelle: 'Master 2'}
  ];
  niveau: any;
  libelle: any;
  valideReq: any;

  classes: any;
  annees: AnneeModel[] = [];

  constructor(private anneeService: AnneeService, private classeService: ClasseService) {
    this.valideReq = false;
    this.classesList();
    this.anneScolairesList();
  }


  annuler() {

  }

  ajouterClasse() {
    //validation
    if (this.annee != undefined && this.annee != "" && this.annee != null && this.filliere != undefined && this.filliere != "" && this.filliere != null && this.niveau != undefined && this.niveau != "" && this.niveau != null && this.libelle != undefined && this.libelle != "" && this.libelle != null) {
     let anneeScolaire = this.annees.find((annee: any) => annee.id == this.annee);
      this.classeService.addClasse$({
        libelle: this.libelle,
        annee_scolaire_id: this.annee,
        anneeScolaire: anneeScolaire,
        filiere: this.filliere,
        niveau: this.niveau
      }).subscribe((data: any) => {
        this.libelle = "";
        this.annee = "";
        this.filliere = "";
        this.niveau = "";
        this.classesList();
      }, (error: any) => {
        console.log(error);
        alert("Erreur lors de l'ajout de la classe")
      });
    } else {
      this.valideReq = true;
    }
  }


  anneScolairesList() {
    this.anneeService.getAllAnneeScolaire().subscribe((data: any) => {
      this.annees = data;
    }, (error: any) => {
      console.log(error);
      alert("Erreur lors du chargement des données")
    });
  }

  classesList() {
    this.classeService.getAllClasses().subscribe((data: any) => {
      this.classes = data;
    }, (error: any) => {
      console.log(error);
      alert("Erreur lors du chargement des données")
    });
  }

  editerClasse(classe: any) {

  }

  supprimerClasse(classe: any) {

  }
}
