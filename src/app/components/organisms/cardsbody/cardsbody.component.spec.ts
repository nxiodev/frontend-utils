import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsbodyComponent } from './cardsbody.component';

describe('CardsbodyComponent', () => {
  let component: CardsbodyComponent;
  let fixture: ComponentFixture<CardsbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsbodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
