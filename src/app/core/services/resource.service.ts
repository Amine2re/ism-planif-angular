import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Injectable, OnInit} from "@angular/core";
import {ResourceModel} from "../../data/types/resource.model";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export abstract class ResourceService<T extends  ResourceModel<T>>{

  private token: string | null | undefined;
  protected   apiUrl : string = environment.apiUrl;
  protected constructor(protected httpClient: HttpClient) {}
  
  getToken():any{
   this.token  = localStorage.getItem('access_token');
   return this.token;
  }

  create$ = (resource: T): Observable<T> => this.httpClient.post<T>(this.apiUrl, resource);

  getById$  = (id: number): Observable<T> => this.httpClient.get<T>(`${this.apiUrl}/${id}`);

  update$  = (resourceModel: T): Observable<T> => this.httpClient.put<T>(`${this.apiUrl}/${resourceModel.id}`, resourceModel);

  getAll$ = (): Observable<T[]> => this.httpClient.get<T[]>(`${this.apiUrl}`);

  getAllByUrl$ = (url: string): Observable<T[]> => this.httpClient.get<T[]>(`${url}`);

  delete$ = (id: number): Observable<any> => this.httpClient.delete<any>(`${this.apiUrl}/${id}`);

  constructHeader(token:any):any{
    return   {
      Authorization: "Bearer ".concat(token)
    }
  }


}
