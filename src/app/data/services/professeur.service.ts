import { Injectable } from '@angular/core';
import {ResourceService} from "../../core/services/resource.service";
import {AnneeModel} from "../types/annee.model";
import {HttpClient} from "@angular/common/http";
import {ProfesseurModel} from "../types/professeur.model";

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService  extends ResourceService<ProfesseurModel>{

  constructor(private http: HttpClient) {
    super(http);
    this.apiUrl = this.apiUrl + '/planification/professeurs'

  }
    professeurs$ = this.getAllByUrl$('http://localhost:8080/api/planification/professeurs');

  addProfesseurs$ = (professeur: ProfesseurModel) => this.create$(professeur);
}
