import { Component , OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { FormControl  , Validators , FormGroup } from '@angular/forms';
import { VehiculeService } from '../../services/vehicule.service';
import { Vehicule } from 'src/app/interface/Vehicule';

@Component({
  selector: 'app-update-vehicules',
  templateUrl: './update-vehicules.component.html',
  styleUrls: ['./update-vehicules.component.css']
})
export class UpdateVehiculesComponent implements OnInit {

  vehicule?: Vehicule | undefined ;
  data: any ;
  id!: number ;

  constructor(private vehiculeService: VehiculeService , private route: ActivatedRoute , private router: Router ){}

  form = new FormGroup({
    nmbrPlaces: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    matricule: new FormControl('', [Validators.required]),
  })

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


  submit(){

    this.data = {
      matricule: this.form.value.matricule ,
      nmbrPlaces: this.form.value.nmbrPlaces , 
      type: this.form.value.type ,
      disponible: 1 
    }

    console.log(this.data);
    this.vehiculeService.update(this.data , this.id).subscribe(data => { this.router.navigate(['/vehicule']); } );

  }
}
