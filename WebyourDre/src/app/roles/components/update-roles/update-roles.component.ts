import { Component , OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { FormControl  , Validators , FormGroup } from '@angular/forms';
import { Role } from 'src/app/interface/Role';
import { RolesService } from '../../services/roles.service';


@Component({
  selector: 'app-update-roles',
  templateUrl: './update-roles.component.html',
  styleUrls: ['./update-roles.component.css']
})
export class UpdateRolesComponent implements OnInit {

  data: any ;
  role?: Role | undefined ;
  id!: number ;

  constructor(private rolesService: RolesService , private router: Router , private route: ActivatedRoute ){}

  form = new FormGroup({
    nameRole: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.params['id']);
    this.rolesService.getOne(this.id).subscribe(
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
      nameRole: this.form.value.nameRole ,
    }

    this.id = Number(this.route.snapshot.params['id']);
    this.rolesService.update(this.data , this.id ).subscribe(data => { this.router.navigate(['/role']); } );

  }

}
