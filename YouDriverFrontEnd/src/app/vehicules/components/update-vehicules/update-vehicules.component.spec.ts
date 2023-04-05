import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehiculesComponent } from './update-vehicules.component';

describe('UpdateVehiculesComponent', () => {
  let component: UpdateVehiculesComponent;
  let fixture: ComponentFixture<UpdateVehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVehiculesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
