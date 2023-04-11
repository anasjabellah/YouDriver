import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUtilisateurComponent } from './show-utilisateur.component';

describe('ShowUtilisateurComponent', () => {
  let component: ShowUtilisateurComponent;
  let fixture: ComponentFixture<ShowUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
