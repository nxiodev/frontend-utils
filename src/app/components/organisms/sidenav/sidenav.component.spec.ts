import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavOrganism } from './sidenav.component';

describe('SidenavOrganism', () => {
  let component: SidenavOrganism;
  let fixture: ComponentFixture<SidenavOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavOrganism]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
