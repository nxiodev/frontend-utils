import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtitleComponent } from './cardtitle.component';

describe('CardtitleComponent', () => {
  let component: CardtitleComponent;
  let fixture: ComponentFixture<CardtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardtitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
