import { Component , OnInit } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.css']
})

export class ListOffersComponent implements OnInit  {

  id!: number ;
  offers: any[] | undefined ;

  constructor(private offerService: OfferService , private route: ActivatedRoute ){}

  ngOnInit(){
    
      this.id = Number(this.route.snapshot.params['id']);
      this.offerService.getAll(this.id).subscribe( 
        data => {
          this.offers = data ;
          console.log(data);
        }
      )
  }
}
