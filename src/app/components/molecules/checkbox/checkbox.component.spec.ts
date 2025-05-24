import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxMolecule } from './checkbox.component';

describe('CheckboxMolecule', () => {
  let component: CheckboxMolecule;
  let fixture: ComponentFixture<CheckboxMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxMolecule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
