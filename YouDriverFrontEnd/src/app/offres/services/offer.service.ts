import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  public API = '//localhost:8888';
  public Offer_API = this.API + '/compagnie/';
  

  constructor(private http: HttpClient) { }

  getAll(id: number): Observable<any> {
    return this.http.get( this.Offer_API + id + '/offers');
  }

  





}
