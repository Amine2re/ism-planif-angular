import {Component} from '@angular/core';
import {AnneeModel} from "../../../data/types/annee.model";
import {AnneeService} from "../../../data/services/annee.service";

@Component({
  selector: 'app-annee-scolaire',
  templateUrl: './annee-scolaire.component.html',
  styleUrls: ['./annee-scolaire.component.css']
})
export class AnneeScolaireComponent {
  title = 'Annee Scolaire';
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [7, 14, 28, 56];
  valideReq: boolean = false;
  annee: any | undefined;
  anneeScolaires: AnneeModel[] = [];
  anneeScolaireUri:string = "/planification/allAnneScolaire";

  constructor(private  anneeService: AnneeService) {
    console.log("token ___" , localStorage.getItem('access_token'));
    this.anneeScolairesList();

  }

  onTableDataChange(event: any) {
    this.page = event;
    this.anneeScolairesList();

  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.anneeScolairesList();
  }

  anneeScolairesList() {

    this.anneeService.getAllAnneeScolaire().subscribe((data: any) => {
      this.anneeScolaires = data;
    }, (error: any) => {
      console.log(error);
      alert("Erreur lors du chargement des données")
    });
  }

  ajouterAnnee() {
     if (this.annee != undefined && this.annee != "" && this.annee != null) {
      this.anneeService.addAnneeScolaire({annee: this.annee}).subscribe((data: any) => {
        console.log(" annee created ... ",data)
        this.annee = "";
        this.anneeScolairesList();
      }, (error: any) => {
        console.log(error);
        alert("Erreur lors de l'ajout de l'année scolaire")
      });
    } else {
      this.valideReq = true;
    } 
  }

  annuler() {

  }
}
