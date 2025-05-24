import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMolecule } from './input.component';

describe('InputMolecule', () => {
  let component: InputMolecule;
  let fixture: ComponentFixture<InputMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputMolecule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
