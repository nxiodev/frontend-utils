import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsubtitleComponent } from './cardsubtitle.component';

describe('CardsubtitleComponent', () => {
  let component: CardsubtitleComponent;
  let fixture: ComponentFixture<CardsubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsubtitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
