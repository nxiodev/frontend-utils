import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMolecule } from './card.component';

describe('CardMolecule', () => {
  let component: CardMolecule;
  let fixture: ComponentFixture<CardMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMolecule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
