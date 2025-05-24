import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAtom } from './icon.component';

describe('IconAtom', () => {
  let component: IconAtom;
  let fixture: ComponentFixture<IconAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
