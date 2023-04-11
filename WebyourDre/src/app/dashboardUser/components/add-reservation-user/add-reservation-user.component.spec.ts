import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReservationUserComponent } from './add-reservation-user.component';

describe('AddReservationUserComponent', () => {
  let component: AddReservationUserComponent;
  let fixture: ComponentFixture<AddReservationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReservationUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReservationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
