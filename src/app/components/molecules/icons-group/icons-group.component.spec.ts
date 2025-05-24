import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsGroupComponent } from './icons-group.component';

describe('IconsGroupComponent', () => {
  let component: IconsGroupComponent;
  let fixture: ComponentFixture<IconsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
