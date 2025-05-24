import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsMolecule } from './texts.component';

describe('TextsMolecule', () => {
  let component: TextsMolecule;
  let fixture: ComponentFixture<TextsMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextsMolecule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextsMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
