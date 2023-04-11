import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { utilisateur } from 'src/app/interface/utilisateur';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  public API = '//localhost:8888';
  public Reservations_API = this.API + '/compagnie/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get( this.Reservations_API  + '1/reservations');
  }

  getOne(id: number): Observable<any>{
    return this.http.get( this.Reservations_API  + 'reservation/'+ id);
  }

  sava(utilisateur: utilisateur){
    return this.http.post<utilisateur>(this.Reservations_API + "reservation/add" , utilisateur);
  }
  
  getAllByOffer(id: number){
    return this.http.get(this.Reservations_API + "offer/"+ id +"/reservations");
  }

  getAllByUser(id: number){
    return this.http.get(this.API + "/Utilisateur/1/reservations");
  }


}
