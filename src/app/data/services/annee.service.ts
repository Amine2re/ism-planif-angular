import { Injectable } from '@angular/core';
import {ResourceService} from "../../core/services/resource.service";
import {AnneeModel} from "../types/annee.model";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnneeService  extends ResourceService<AnneeModel>{

  baseUrlAnneeScolaire = "";

  constructor(private http: HttpClient) {
    super(http);
   // this.apiUrl = this.apiUrl + '/planification/annee-scolaire'
  }
  /* anneeScolaires$ = this.getAll$();

  addAnneeScolaire$ = (annee: AnneeModel) => this.create$(annee); */

  getAllAnneeScolaire():Observable<any>{
    return this.http.get(this.apiUrl.concat("/planification/allAnneScolaire"));
  }

  addAnneeScolaire(anneeScolaire:any):Observable<any>{
    return this.http.post(this.apiUrl.concat("/planification/annee-scolaire"),anneeScolaire);
  }
}
