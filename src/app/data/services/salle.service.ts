import {ResourceService} from "../../core/services/resource.service";
import {SalleModel} from "../types/salle.model";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SalleService  extends ResourceService<SalleModel>{

  constructor(private http: HttpClient) {
    super(http);
    //this.apiUrl = this.apiUrl + '/planification/salles'
  }
  salles$ = this.getAllByUrl$('http://localhost:8080/api/planification/allSalles');

  addSalle$ = (salle: SalleModel) => this.create$(salle);

  addSalle(salle:SalleModel){
    console.log("prepare post salle = ", salle);
    return this.http.post('http://localhost:8080/api/planification/salle',salle);
  }

  getAllSalle(){
    return this.http.get("http://localhost:8080/api/planification/allSalles");
  }
}
