import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from '../../services/roles.service';
import { Role } from 'src/app/interface/Role';

@Component({
  selector: 'app-show-roles',
  templateUrl: './show-roles.component.html',
  styleUrls: ['./show-roles.component.css']
})
export class ShowRolesComponent {

  role?: Role | undefined ;
  data: any ;
  id!: number ;

  constructor(private rolesService: RolesService , private route: ActivatedRoute ){}

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

}
