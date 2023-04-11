import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerUtilisateurComponent } from './container-utilisateur.component';

describe('ContainerUtilisateurComponent', () => {
  let component: ContainerUtilisateurComponent;
  let fixture: ComponentFixture<ContainerUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
