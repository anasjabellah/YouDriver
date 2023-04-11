import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeService } from '../../services/vehicule.service';
import { Vehicule } from 'src/app/interface/Vehicule';

@Component({
  selector: 'app-show-vehicules',
  templateUrl: './show-vehicules.component.html',
  styleUrls: ['./show-vehicules.component.css']
})
export class ShowVehiculesComponent implements OnInit{

  vehicule?: Vehicule | undefined ;
  data: any ;
  id!: number ;

  constructor(private vehiculeService: VehiculeService , private route: ActivatedRoute ){}

  
  ngOnInit(): void {

    this.id = Number(this.route.snapshot.params['id']);
    this.vehiculeService.getOne(this.id).subscribe(
      data => {
        this.vehicule = {
          id: data.id ,
          matricule: data.matricule ,
          nmbrPlaces: data.nmbrPlaces ,
          type: data.type ,
          disponible: data.disponible ,
        }
      }
      
    )

  }


}
