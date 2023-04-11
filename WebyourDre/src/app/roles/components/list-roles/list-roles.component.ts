import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {

  roles: any[] | undefined ;

  constructor(private rolesService: RolesService , private route: ActivatedRoute ){}

  ngOnInit(): void {
      this.rolesService.getAll().subscribe(
        data => {
          this.roles = data ;
        }
      )
  }

}
