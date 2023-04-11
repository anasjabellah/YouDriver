import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/interface/Offer';


@Injectable({
  providedIn: 'root'
})
export class OfferService {

  public API = '//localhost:8888';
  public Offer_API = this.API + '/compagnie/';
  

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get( this.Offer_API  + '1/offers');
  }


  getOne(id: number): Observable<any> {
    return this.http.get( this.Offer_API  + 'offer/'+ id);
  }

  getVehicule(): Observable<any>{
    return this.http.get(this.Offer_API + "1/Vehicules");
  }

  getOneVehicule(id: number): Observable<any>{
    return this.http.get(this.Offer_API + "vehicule/"+ id );
  }

  sava(offer: Offer){
    return this.http.post<Offer>(this.Offer_API + "1/offer/save" , offer);
  }
  

}
