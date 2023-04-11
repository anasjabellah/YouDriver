import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { utilisateur } from 'src/app/interface/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  public API = '//localhost:8888';
  public Vehicule_API = this.API + '/compagnie/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get( this.API  + '/Utilisateurs');
  }

  getOne(id: number): Observable<any>{
    return this.http.get( this.API  + '/Utilisateurs/id/'+ id);
  }

  sava(utilisateur: utilisateur){
    return this.http.post<utilisateur>(this.API + "/1/Utilisateurs/user/save" , utilisateur);
  }

  update(utilisateur: utilisateur, id: number){
    return this.http.put<utilisateur>( this.API +'/Utilisateurs/update/'+ id , utilisateur );
  }

}
