import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionsIconComponent } from './descriptions-icon.component';

describe('DescriptionsIconComponent', () => {
  let component: DescriptionsIconComponent;
  let fixture: ComponentFixture<DescriptionsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionsIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
