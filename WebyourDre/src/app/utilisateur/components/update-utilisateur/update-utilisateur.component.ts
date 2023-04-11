import { Component , OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { FormControl  , Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { utilisateur } from 'src/app/interface/utilisateur';
import { UtilisateurService } from '../../services/utilisateur.service';

import { Role } from 'src/app/interface/Role';
import { RolesService } from 'src/app/roles/services/roles.service';

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.css']
})
export class UpdateUtilisateurComponent implements OnInit {

  utilisateur?: utilisateur | undefined ;
  roles!: Role[] | any ;
  role!: Role  ;

  data: any ;
  id!: number ;
  idvehi!: string | any ;
  dataRole:  any ;
  dataOneRole: any ;
  
  constructor(private utilisateurService: UtilisateurService , private rolesService: RolesService , private route: ActivatedRoute , private router: Router ){}

  getUtilisateur(){
    this.id = Number(this.route.snapshot.params['id']);
    this.utilisateurService.getOne(this.id).subscribe(
      data => {
        this.utilisateur = {
          id: data.id ,
          userName: data.userName ,
          email: data.email ,
          tel: data.tel ,
          address: data.address ,
          firstName: data.firstName ,
          lastName: data.lastName ,
          password: data.password ,
          role: data.role 
        }
      }
    )
  }

  ngOnInit(): void {
    this.getUtilisateur();
    this.rolesService.getAll().subscribe(
      data => {
        this.roles = data ;
      }
    )
  };

  form = new FormGroup({
    userName: new FormControl( '' , [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
  });

  changeRole(){
    this.idvehi = this.form.value.role ;
    this.rolesService.getOne(this.idvehi).subscribe(
      data => {
        this.role = {
          id: data.id ,
          nameRole: data.nameRole ,
        }
      }
    )
  }

  submit(){
    this.data = {
      userName: this.form.value.userName , 
      firstName: this.form.value.firstName ,
      lastName: this.form.value.lastName ,
      address: this.form.value.address ,
      email: this.form.value.email ,
      tel: this.form.value.tel  ,
      pass: this.form.value.pass  ,
      role: this.role  ,
    }
    this.utilisateurService.update(this.data , this.id ).subscribe( data => { this.router.navigate(['/utilisateur']); } )
  }
}
