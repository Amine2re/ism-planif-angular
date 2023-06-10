import { Injectable } from '@angular/core';
import {ResourceService} from "../../core/services/resource.service";
import {AnneeModel} from "../types/annee.model";
import {HttpClient} from "@angular/common/http";
import {CoursModel} from "../types/cours.model";

@Injectable({
  providedIn: 'root'
})
export class CoursService  extends ResourceService<CoursModel>{

  constructor(private http: HttpClient) {
    super(http);
    this.apiUrl = this.apiUrl + '/planification/cours';
  }
  coursList$ = this.getAllByUrl$('http://localhost:8080/api/planification/allCours');

  addCours$ = (cours: CoursModel) => this.create$(cours);
  ///cours/{coursId}/professeur/{professeurId}
  addCours(cours:CoursModel){
    return this.httpClient.post('http://localhost:8080/api/planification/cours',cours);
  }
  affecterProfesseur$ = (coursId: any, professeurId: any) => this.http.post(`http://localhost:8080/api/planification/cours/${coursId}/professeur/${professeurId}`, null);
}
