import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeContainerComponent } from './vehicule-container.component';

describe('VehiculeContainerComponent', () => {
  let component: VehiculeContainerComponent;
  let fixture: ComponentFixture<VehiculeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
