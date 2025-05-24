import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbMolecule } from './breadcrumb.component';

describe('BreadcrumbMolecule', () => {
  let component: BreadcrumbMolecule;
  let fixture: ComponentFixture<BreadcrumbMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbMolecule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
