import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/reservation/services/reservation.service';
import { Reservation } from 'src/app/interface/Reservation';

@Component({
  selector: 'app-show-reservation-user',
  templateUrl: './show-reservation-user.component.html',
  styleUrls: ['./show-reservation-user.component.css']
})
export class ShowReservationUserComponent implements OnInit {

  Reservation?: Reservation | undefined ;
  data: any ;
  id!: number ;

  constructor(private reservationService: ReservationService , private route: ActivatedRoute ){}

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.params['id']);
    this.reservationService.getOne(this.id).subscribe( 
      data => {
        this.Reservation = {
          id: data.id ,
          date: data.date ,
          offre: data.offre,
          utilisateur: data.utilisateur,
    
        }

      }
    )

  }
}
