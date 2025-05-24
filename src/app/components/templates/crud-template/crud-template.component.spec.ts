import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTemplate } from './crud-template.component';

describe('CrudTemplate', () => {
  let component: CrudTemplate;
  let fixture: ComponentFixture<CrudTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
