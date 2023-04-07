import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitAcceuilComponent } from './produit-acceuil.component';

describe('ProduitAcceuilComponent', () => {
  let component: ProduitAcceuilComponent;
  let fixture: ComponentFixture<ProduitAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitAcceuilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
