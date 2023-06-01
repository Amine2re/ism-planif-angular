import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLayoutComponent } from './gestion-layout.component';

describe('GestionLayoutComponent', () => {
  let component: GestionLayoutComponent;
  let fixture: ComponentFixture<GestionLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionLayoutComponent]
    });
    fixture = TestBed.createComponent(GestionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
