import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivTextComponent } from './div-text.component';

describe('DivTextComponent', () => {
  let component: DivTextComponent;
  let fixture: ComponentFixture<DivTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
