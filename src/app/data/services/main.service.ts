import { Injectable } from '@angular/core';
import {ResourceService} from "../../core/services/resource.service";
import {ClasseModel} from "../types/classe.model";

@Injectable({
  providedIn: 'root'
})
export class ClasseService  extends ResourceService<ClasseModel>{

}