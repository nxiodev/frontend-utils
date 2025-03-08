import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardimageComponent } from './cardimage.component';

describe('CardimageComponent', () => {
  let component: CardimageComponent;
  let fixture: ComponentFixture<CardimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardimageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
