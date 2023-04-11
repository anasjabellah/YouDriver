import { Component , OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { FormControl  , Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { utilisateur } from 'src/app/interface/utilisateur';
import { Role } from 'src/app/interface/Role';
import { UtilisateurService } from '../../services/utilisateur.service';
import { RolesService } from 'src/app/roles/services/roles.service';

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit {


  utilisateur!: utilisateur ;
  roles!: Role[] | any ;
  role!: Role  ;

  idvehi!: string | any ;
  dataRole:  any ;
  dataOneRole: any ;
  data: any ;
  id!: number ;

  constructor(private rolesService: RolesService , private utilisateurService: UtilisateurService , private router: Router , private route: ActivatedRoute) { }


  form = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    
  })

  ngOnInit(): void {
    this.rolesService.getAll().subscribe( 
      dataRole => {
        this.roles =  dataRole;
      }
    )
  }

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
    
    this.utilisateurService.sava(this.data).subscribe( data => { this.router.navigate(['/utilisateur']); } )

  }


}
