import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionsInputComponent } from './descriptions-input.component';

describe('DescriptionsInputComponent', () => {
  let component: DescriptionsInputComponent;
  let fixture: ComponentFixture<DescriptionsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionsInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
