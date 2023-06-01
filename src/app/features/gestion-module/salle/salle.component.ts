import {Component} from '@angular/core';
import {SalleModel} from "../../../data/types/salle.model";
import {SalleService} from "../../../data/services/salle.service";

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent {
  valideReq: any;
  nombre_places: any;
  numero: any;
  nom: any;
  salles: SalleModel[] = [];

  constructor(private salleService: SalleService) {
    this.sallesList();
  }

  editerSalle(salle: any) {

  }

  supprimerSalle(salle: any) {

  }

  annuler() {

  }

  ajouterSalle() {
    //validation
    if (this.numero != undefined && this.numero != "" && this.numero != null && this.nom != undefined && this.nom != "" && this.nom != null && this.nombre_places != undefined && this.nombre_places != "" && this.nombre_places != null) {
      this.valideReq = false;
      const salle = {
        numero: this.numero,
        nom: this.nom,
        nombrePlaces: this.nombre_places
      }
      this.salleService.create$(salle).subscribe((data: any) => {
          this.sallesList();
          //reset
          this.numero = "";
          this.nom = "";
          this.nombre_places = "";

        },
        (error: any) => {
          console.log(error);
        }
      );
    }
    this.valideReq = true;
  }

  sallesList() {

    this.salleService.salles$.subscribe((data: any) => {
        this.salles = data;
      },
      (error: any) => {
        console.log(error);
      });

  }
}
