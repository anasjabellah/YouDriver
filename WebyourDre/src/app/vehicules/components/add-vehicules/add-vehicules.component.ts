import { Component , OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { FormControl  , Validators , FormGroup } from '@angular/forms';
import { VehiculeService } from '../../services/vehicule.service';
import { Vehicule } from 'src/app/interface/Vehicule';



@Component({
  selector: 'app-add-vehicules',
  templateUrl: './add-vehicules.component.html',
  styleUrls: ['./add-vehicules.component.css']
})
export class AddVehiculesComponent implements OnInit {

  vehicules!: Vehicule[] | any ;
  data: any ;

  constructor(private vehiculeService: VehiculeService , private router: Router , private route: ActivatedRoute ){}

  form = new FormGroup({
    nmbrPlaces: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    matricule: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
      
  }

  submit(){

    this.data = {
      matricule: this.form.value.matricule ,
      nmbrPlaces: this.form.value.nmbrPlaces , 
      type: this.form.value.type ,
      disponible: 1 
    }

    console.log(this.data);
    this.vehiculeService.save(this.data).subscribe(data => { this.router.navigate(['/vehicule']); } );

  }

}
