import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReservationUserComponent } from './show-reservation-user.component';

describe('ShowReservationUserComponent', () => {
  let component: ShowReservationUserComponent;
  let fixture: ComponentFixture<ShowReservationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReservationUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowReservationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
