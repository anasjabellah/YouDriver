import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderManadgerComponent } from './header-manadger.component';

describe('HeaderManadgerComponent', () => {
  let component: HeaderManadgerComponent;
  let fixture: ComponentFixture<HeaderManadgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderManadgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderManadgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
