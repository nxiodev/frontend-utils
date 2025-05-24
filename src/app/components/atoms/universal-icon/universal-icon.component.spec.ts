import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalIconAtom } from './universal-icon.component';

describe('UniversalIconAtom', () => {
  let component: UniversalIconAtom;
  let fixture: ComponentFixture<UniversalIconAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversalIconAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversalIconAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
