import { Component , OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { FormControl  , Validators , FormGroup } from '@angular/forms';
import { Role } from 'src/app/interface/Role';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.css']
})
export class AddRolesComponent  {

  data: any ;
  role: Role[] | any ;

  constructor(private rolesService: RolesService , private router: Router , private route: ActivatedRoute ){}

  form = new FormGroup({
    nameRole: new FormControl('', [Validators.required]),
  })


  submit(){

    this.data = {
      nameRole: this.form.value.nameRole ,
    }

    console.log(this.data);
    this.rolesService.save(this.data).subscribe(data => { this.router.navigate(['/role']); } );

  }
  
}
