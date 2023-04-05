import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVehiculesComponent } from './list-vehicules.component';

describe('ListVehiculesComponent', () => {
  let component: ListVehiculesComponent;
  let fixture: ComponentFixture<ListVehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVehiculesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
