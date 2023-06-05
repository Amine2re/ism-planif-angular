import {Injectable} from "@angular/core";
import {ResourceService} from "../../core/services/resource.service";
import {HttpClient} from "@angular/common/http";
import {SemestreModel} from "../types/semestre.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SemestreService  extends ResourceService<SemestreModel>{

  constructor(private http: HttpClient) {
    super(http);
  //  this.apiUrl = this.apiUrl + '/planification/semestres/'
  }
  semestres$ = this.getAllByUrl$("http://localhost:8080/api/planification/semestres");

  addSemestre$ = (semestre: SemestreModel) => this.create$(semestre);

  getAllSemestre(): Observable<SemestreModel>{
    return this.http.get(this.apiUrl.concat("/planification/allSemestre"));
  }
}
