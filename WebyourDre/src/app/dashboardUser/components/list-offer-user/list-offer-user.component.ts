import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from 'src/app/offres/services/offer.service';

@Component({
  selector: 'app-list-offer-user',
  templateUrl: './list-offer-user.component.html',
  styleUrls: ['./list-offer-user.component.css']
})
export class ListOfferUserComponent implements OnInit {

  offers: any[] | undefined ;
  constructor(private offerService: OfferService , private route: ActivatedRoute ){}

  ngOnInit(): void {
    this.offerService.getAll().subscribe( 
      data => {
        this.offers = data ;
        console.log(data);
      }
    )
  }

}
