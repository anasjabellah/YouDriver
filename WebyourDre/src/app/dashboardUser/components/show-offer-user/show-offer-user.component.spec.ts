import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOfferUserComponent } from './show-offer-user.component';

describe('ShowOfferUserComponent', () => {
  let component: ShowOfferUserComponent;
  let fixture: ComponentFixture<ShowOfferUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOfferUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOfferUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
