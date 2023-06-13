import { Injectable } from '@angular/core';
import {ResourceService} from "../../core/services/resource.service";
import {AnneeModel} from "../types/annee.model";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnneeService  extends ResourceService<AnneeModel>{

  constructor(private http: HttpClient) {
    super(http);
  }


  getAllAnneeScolaire():Observable<any>{
    return this.http.get(this.apiUrl.concat("/planification/allAnneeScolaire"));
  }

  addAnneeScolaire(anneeScolaire:any):Observable<any>{
    return this.http.post(this.apiUrl.concat("/planification/annee-scolaire"),anneeScolaire);
  }

  
}
