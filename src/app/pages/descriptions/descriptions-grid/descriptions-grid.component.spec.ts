import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionsGridComponent } from './descriptions-grid.component';

describe('DescriptionsGridComponent', () => {
  let component: DescriptionsGridComponent;
  let fixture: ComponentFixture<DescriptionsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionsGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
