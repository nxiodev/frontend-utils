import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionsChipsComponent } from './descriptions-chips.component';

describe('DescriptionsChipsComponent', () => {
  let component: DescriptionsChipsComponent;
  let fixture: ComponentFixture<DescriptionsChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionsChipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionsChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
