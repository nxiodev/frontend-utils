import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionsProgressSpinnerComponent } from './descriptions-progress-spinner.component';

describe('DescriptionsProgressSpinnerComponent', () => {
  let component: DescriptionsProgressSpinnerComponent;
  let fixture: ComponentFixture<DescriptionsProgressSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionsProgressSpinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionsProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
