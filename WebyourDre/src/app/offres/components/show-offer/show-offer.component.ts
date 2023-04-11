import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from '../../services/offer.service';
import { Offer } from 'src/app/interface/Offer';

@Component({
  selector: 'app-show-offer',
  templateUrl: './show-offer.component.html',
  styleUrls: ['./show-offer.component.css']
})
export class ShowOfferComponent implements OnInit {

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
