import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemMolecule } from './searchbar-item.component';

describe('SearchbarItemComponent', () => {
  let component: MenuItemMolecule;
  let fixture: ComponentFixture<MenuItemMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemMolecule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
