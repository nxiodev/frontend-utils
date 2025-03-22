import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsSetComponent } from './chips-set.component';

describe('ChipsSetComponent', () => {
  let component: ChipsSetComponent;
  let fixture: ComponentFixture<ChipsSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
