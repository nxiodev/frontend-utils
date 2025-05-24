import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeAtom } from './badge.component';

describe('BadgeAtom', () => {
  let component: BadgeAtom;
  let fixture: ComponentFixture<BadgeAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
