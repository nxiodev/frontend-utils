import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGridOrganism } from './card-grid.component';

describe('CardGridOrganism', () => {
  let component: CardGridOrganism;
  let fixture: ComponentFixture<CardGridOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGridOrganism]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGridOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
