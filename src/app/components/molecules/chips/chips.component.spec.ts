import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsMolecule } from './chips.component';

describe('ChipsMolecule', () => {
  let component: ChipsMolecule;
  let fixture: ComponentFixture<ChipsMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsMolecule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
