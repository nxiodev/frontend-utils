import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivTextMolecule } from './div-text.component';

describe('DivTextMolecule', () => {
  let component: DivTextMolecule;
  let fixture: ComponentFixture<DivTextMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DivTextMolecule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivTextMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
