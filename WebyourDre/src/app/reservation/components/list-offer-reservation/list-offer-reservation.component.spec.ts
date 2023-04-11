import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfferReservationComponent } from './list-offer-reservation.component';

describe('ListOfferReservationComponent', () => {
  let component: ListOfferReservationComponent;
  let fixture: ComponentFixture<ListOfferReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfferReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfferReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
