import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeService } from '../../services/vehicule.service';


@Component({
  selector: 'app-list-vehicules',
  templateUrl: './list-vehicules.component.html',
  styleUrls: ['./list-vehicules.component.css']
})


export class ListVehiculesComponent implements OnInit {

  vehicules: any[] | undefined ;

  constructor(private vehiculeService: VehiculeService , private route: ActivatedRoute ){}

  ngOnInit(): void {
      this.vehiculeService.getAll().subscribe(
        data => {
          this.vehicules = data ;
        }
      )
  }
}
