import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionsCardComponent } from './descriptions-card.component';

describe('DescriptionsCardComponent', () => {
  let component: DescriptionsCardComponent;
  let fixture: ComponentFixture<DescriptionsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
