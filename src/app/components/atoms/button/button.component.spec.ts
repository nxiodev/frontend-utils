import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAtom } from './button.component';

describe('ButtonAtom', () => {
  let component: ButtonAtom;
  let fixture: ComponentFixture<ButtonAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
