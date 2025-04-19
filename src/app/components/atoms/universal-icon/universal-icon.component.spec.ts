import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalIconComponent } from './universal-icon.component';

describe('UniversalIconComponent', () => {
  let component: UniversalIconComponent;
  let fixture: ComponentFixture<UniversalIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversalIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversalIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
