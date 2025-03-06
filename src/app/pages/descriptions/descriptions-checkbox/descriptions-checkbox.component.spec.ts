import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionsCheckboxComponent } from './descriptions-checkbox.component';

describe('DescriptionsCheckboxComponent', () => {
  let component: DescriptionsCheckboxComponent;
  let fixture: ComponentFixture<DescriptionsCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionsCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
