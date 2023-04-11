import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-list-offer-reservation',
  templateUrl: './list-offer-reservation.component.html',
  styleUrls: ['./list-offer-reservation.component.css']
})
export class ListOfferReservationComponent implements OnInit {

  
  Reservations: any | undefined ;
  id!: number ;

  constructor(private reservationService: ReservationService , private route: ActivatedRoute ){}

  ngOnInit(){

    this.id = Number(this.route.snapshot.params['id']);
    this.reservationService.getAllByOffer(this.id).subscribe(
      data => {
        this.Reservations = data ;
      }
    );
  }

}
