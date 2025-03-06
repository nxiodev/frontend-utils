import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionsBadgeComponent } from './descriptions-badge.component';

describe('DescriptionsBadgeComponent', () => {
  let component: DescriptionsBadgeComponent;
  let fixture: ComponentFixture<DescriptionsBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionsBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionsBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
