import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/reservation/services/reservation.service';


@Component({
  selector: 'app-list-reservation-user',
  templateUrl: './list-reservation-user.component.html',
  styleUrls: ['./list-reservation-user.component.css']
})
export class ListReservationUserComponent implements OnInit {

  Reservations: any | undefined ;
  id!: number ;

  constructor(private reservationService: ReservationService , private route: ActivatedRoute ){}

  ngOnInit(){

    this.id = Number(this.route.snapshot.params['id']);
    this.reservationService.getAllByUser(this.id).subscribe(
      data => {
        this.Reservations = data ;
      }
    );
  }

}
