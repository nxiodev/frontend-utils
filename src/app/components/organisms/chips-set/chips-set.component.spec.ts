import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsSetOrganism } from './chips-set.component';

describe('ChipsSetOrganism', () => {
  let component: ChipsSetOrganism;
  let fixture: ComponentFixture<ChipsSetOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsSetOrganism]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsSetOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
