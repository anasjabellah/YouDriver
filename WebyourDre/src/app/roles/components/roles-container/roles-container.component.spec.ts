import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesContainerComponent } from './roles-container.component';

describe('RolesContainerComponent', () => {
  let component: RolesContainerComponent;
  let fixture: ComponentFixture<RolesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
