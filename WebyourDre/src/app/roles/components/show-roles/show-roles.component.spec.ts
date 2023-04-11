import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRolesComponent } from './show-roles.component';

describe('ShowRolesComponent', () => {
  let component: ShowRolesComponent;
  let fixture: ComponentFixture<ShowRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
