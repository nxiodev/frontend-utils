import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerAtom } from './progress-spinner.component';

describe('ProgressSpinnerAtom', () => {
  let component: ProgressSpinnerAtom;
  let fixture: ComponentFixture<ProgressSpinnerAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressSpinnerAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressSpinnerAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
