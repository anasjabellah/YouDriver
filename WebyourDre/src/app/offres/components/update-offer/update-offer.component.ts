import { Component , OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { FormControl  , Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { Vehicule } from 'src/app/interface/Vehicule';
import { Offer } from 'src/app/interface/Offer';
import { OfferService } from '../../services/offer.service';


@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {

  offer!: Offer ;
  vehicules!: Vehicule[] | any ;
  dataOffer!: any ;
  dataVehicules!: any ;
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

  ngOnInit() {

    this.id = Number(this.route.snapshot.params['id']);
    this.offerService.getOne(this.id).subscribe( 
      data => {
        this.offer = {
          id: data.id ,
          adresseArivee: data.adresseArivee ,
          adresseDepart: data.adresseDepart,
          dateEnd: data.dateEnd,
          dateStart: data.dateStart,
          nmbrPlaces: data.nmbrPlaces,
          vehicule: data.vehicule
        }

        console.log(this.offer);
      }
    )
      
  }

  submit(){}

}
