import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReservationUserComponent } from './list-reservation-user.component';

describe('ListReservationUserComponent', () => {
  let component: ListReservationUserComponent;
  let fixture: ComponentFixture<ListReservationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReservationUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReservationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
