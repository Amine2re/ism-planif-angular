import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneeScolaireComponent } from './annee-scolaire.component';

describe('AnneeScolaireComponent', () => {
  let component: AnneeScolaireComponent;
  let fixture: ComponentFixture<AnneeScolaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnneeScolaireComponent]
    });
    fixture = TestBed.createComponent(AnneeScolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
