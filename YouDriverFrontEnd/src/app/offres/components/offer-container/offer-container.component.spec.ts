import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferContainerComponent } from './offer-container.component';

describe('OfferContainerComponent', () => {
  let component: OfferContainerComponent;
  let fixture: ComponentFixture<OfferContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
