import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderuserComponent } from './headeruser.component';

describe('HeaderuserComponent', () => {
  let component: HeaderuserComponent;
  let fixture: ComponentFixture<HeaderuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
