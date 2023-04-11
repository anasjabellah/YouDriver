import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsOffersComponent } from './lists-offers.component';

describe('ListsOffersComponent', () => {
  let component: ListsOffersComponent;
  let fixture: ComponentFixture<ListsOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
