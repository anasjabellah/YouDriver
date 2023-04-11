import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from 'src/app/interface/Role';


@Injectable({
  providedIn: 'root'
})
export class RolesService {

  public API = '//localhost:8888';
  public Role_API = this.API + '/roles';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get( this.Role_API  + '');
  }

  getOne(id: number): Observable<any>{
    return this.http.get( this.Role_API  + '/role/'+ id);
  }

  save(role: Role){
    return this.http.post<Role>( this.Role_API  + '/role/save' , role);
  }

  update(role: Role , id: number){
    return this.http.put<Role>( this.Role_API  + '/role/update/'+ id , role );
  }
  
}
