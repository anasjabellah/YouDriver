import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/interface/Offer';
import { OfferService } from 'src/app/offres/services/offer.service';

@Component({
  selector: 'app-show-offer-user',
  templateUrl: './show-offer-user.component.html',
  styleUrls: ['./show-offer-user.component.css']
})
export class ShowOfferUserComponent implements OnInit {

  
  offer?: Offer  | undefined ;
  data: any ;
  id!: number ;

  constructor(private offerService: OfferService , private route: ActivatedRoute ){}


  ngOnInit(): void {
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

}
