import { Injectable } from '@angular/core';
import {ResourceService} from "../../core/services/resource.service";
import {HttpClient} from "@angular/common/http";
import {ClasseModel} from "../types/classe.model";

@Injectable({
  providedIn: 'root'
})
export class ClasseService  extends ResourceService<ClasseModel>{

  constructor(private http: HttpClient) {
    super(http);
    //this.apiUrl = this.apiUrl + '/planification/classes'
  }

  //classes$ = this.getAllByUrl$("http://localhost:8080/api/planification/allAnneScolaire");

  addClasse$ = (classe: ClasseModel) => this.create$(classe);

  getAllClasses(){
    return this.http.get(this.apiUrl.concat("/planification/allClasses"));
  }
}
