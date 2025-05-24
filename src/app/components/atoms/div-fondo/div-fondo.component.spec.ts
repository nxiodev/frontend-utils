import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivFondoAtom } from './div-fondo.component';

describe('DivFondoAtom', () => {
  let component: DivFondoAtom;
  let fixture: ComponentFixture<DivFondoAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivFondoAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivFondoAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
