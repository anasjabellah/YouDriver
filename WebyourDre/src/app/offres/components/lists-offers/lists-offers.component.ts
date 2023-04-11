import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-lists-offers',
  templateUrl: './lists-offers.component.html',
  styleUrls: ['./lists-offers.component.css']
})
export class ListsOffersComponent implements OnInit {

  
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

