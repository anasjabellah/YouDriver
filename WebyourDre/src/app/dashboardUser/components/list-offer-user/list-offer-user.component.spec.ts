import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfferUserComponent } from './list-offer-user.component';

describe('ListOfferUserComponent', () => {
  let component: ListOfferUserComponent;
  let fixture: ComponentFixture<ListOfferUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfferUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfferUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
