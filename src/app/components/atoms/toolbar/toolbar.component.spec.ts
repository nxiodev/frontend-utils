import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarAtom } from './toolbar.component';

describe('ToolbarAtom', () => {
  let component: ToolbarAtom;
  let fixture: ComponentFixture<ToolbarAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
