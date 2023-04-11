import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVehiculesComponent } from './show-vehicules.component';

describe('ShowVehiculesComponent', () => {
  let component: ShowVehiculesComponent;
  let fixture: ComponentFixture<ShowVehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowVehiculesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
