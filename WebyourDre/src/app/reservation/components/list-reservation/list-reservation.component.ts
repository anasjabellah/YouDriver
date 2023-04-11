import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../../services/reservation.service';
import { OfferService } from 'src/app/offres/services/offer.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {

  Reservations: any | undefined ;
  id!: number ;


  offers: any[] | undefined ;

  constructor(private offerService: OfferService , private route: ActivatedRoute ){}

  ngOnInit(){
    
      this.offerService.getAll().subscribe( 
        data => {
          this.offers = data ;
          console.log(data);
        }
      )
  }

}
