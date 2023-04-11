import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerReservationComponent } from './container-reservation.component';

describe('ContainerReservationComponent', () => {
  let component: ContainerReservationComponent;
  let fixture: ComponentFixture<ContainerReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
