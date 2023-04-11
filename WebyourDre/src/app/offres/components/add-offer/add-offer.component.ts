import { Component , OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { FormControl  , Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { Vehicule } from 'src/app/interface/Vehicule';
import { Offer } from 'src/app/interface/Offer';
import { OfferService } from '../../services/offer.service';


@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  offer!: Offer ;
  vehicules!: Vehicule[] | any ;
  vehicule!: Vehicule  ;

  idvehi!: string | any ;
  dataVehicules:  any ;
  dataOneVehicule: any ;
  data: any ;
  id!: number ;

  constructor(private offerService: OfferService, private router: Router , private route: ActivatedRoute) { }

  form = new FormGroup({
    adresseArivee: new FormControl('', [Validators.required]),
    adresseDepart: new FormControl('', [Validators.required]),
    dateEnd: new FormControl('', [Validators.required]),
    dateStart: new FormControl('', [Validators.required]),
    nmbrPlaces: new FormControl('', [Validators.required]),
    vehiculeId: new FormControl('', [Validators.required]),
    
  })

  ngOnInit(): void {

      this.offerService.getVehicule().subscribe( 
        dataVehicules => {
          this.vehicules =  dataVehicules;
        }
      )
  };


  changeVehicule() {
    this.idvehi = this.form.value.vehiculeId ;
    this.offerService.getOneVehicule(this.idvehi).subscribe(
      dataOneVehicule  => {
          this.vehicule = {
            id: dataOneVehicule.id ,
            matricule: dataOneVehicule.matricule ,
            nmbrPlaces: dataOneVehicule.nmbrPlaces ,
            type: dataOneVehicule.type ,
            disponible: dataOneVehicule.disponible ,
          }
        }
      );
  }

  submit(){

    this.data = {
      adresseArivee: this.form.value.adresseArivee , 
      adresseDepart: this.form.value.adresseDepart ,
      dateEnd: this.form.value.dateEnd ,
      dateStart: this.form.value.dateStart ,
      nmbrPlaces: this.form.value.nmbrPlaces ,
      vehicule: this.vehicule 
    }



    console.log(this.data);
    this.offerService.sava(this.data).subscribe( data => { this.router.navigate(['/offer']); } )

  }

  
}
