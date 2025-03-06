import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionsButtonComponent } from './descriptions-button.component';

describe('DescriptionsButtonComponent', () => {
  let component: DescriptionsButtonComponent;
  let fixture: ComponentFixture<DescriptionsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionsButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
