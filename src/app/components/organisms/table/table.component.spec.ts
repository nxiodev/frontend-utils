import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOrganism } from './table.component';

describe('TableOrganism', () => {
  let component: TableOrganism;
  let fixture: ComponentFixture<TableOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableOrganism]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
