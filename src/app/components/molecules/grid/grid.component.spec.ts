import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMolecule } from './grid.component';

describe('GridMolecule', () => {
  let component: GridMolecule;
  let fixture: ComponentFixture<GridMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridMolecule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
