import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicule } from 'src/app/interface/Vehicule';


@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  public API = '//localhost:8888';
  public Vehicule_API = this.API + '/compagnie/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get( this.Vehicule_API  + '1/Vehicules');
  }

  getOne(id: number): Observable<any>{
    return this.http.get( this.Vehicule_API  + 'vehicule/'+ id);
  }

  save(vehicule: Vehicule){
    return this.http.post<Vehicule>( this.Vehicule_API + "1/Vehicule/save" , vehicule);
  }

  update(vehicule: Vehicule , id: number){
    return this.http.put<Vehicule>(this.Vehicule_API + "vehicule/update/" + id , vehicule)
  }


}
