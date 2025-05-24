import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOrganism } from './navbar.component';

describe('NavbarOrganism', () => {
  let component: NavbarOrganism;
  let fixture: ComponentFixture<NavbarOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarOrganism]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
