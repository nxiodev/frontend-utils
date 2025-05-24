import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainhomePage } from './mainhome.component';

describe('MainhomePage', () => {
  let component: MainhomePage;
  let fixture: ComponentFixture<MainhomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainhomePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
