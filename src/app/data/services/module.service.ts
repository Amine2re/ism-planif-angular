import { Injectable } from '@angular/core';
import {ResourceService} from "../../core/services/resource.service";
import {AnneeModel} from "../types/annee.model";
import {HttpClient} from "@angular/common/http";
import {ModuleModel} from "../types/module.model";

@Injectable({
  providedIn: 'root'
})
export class ModulesService  extends ResourceService<ModuleModel>{

  constructor(private http: HttpClient) {
    super(http);
    this.apiUrl = this.apiUrl + '/planification/modules'
  }
  modules$ = this.getAllByUrl$("http://localhost:8080/api/planification/modules");

  addModule$ =  (module: ModuleModel) => this.create$(module);
}
