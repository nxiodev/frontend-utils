import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeTemplate } from './mainhome-template.component';

describe('MainHomeTemplate', () => {
  let component: MainHomeTemplate;
  let fixture: ComponentFixture<MainHomeTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainHomeTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHomeTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
