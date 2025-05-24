import { Component, Input } from '@angular/core';
import {MenuItemMolecule} from '../../molecules/menu-item/menu-item.component';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [MenuItemMolecule, MatToolbar],
  standalone: true,
  styleUrls: ['./navbar.component.css']
})
export class NavbarOrganism {
  @Input() label: string = '';
  @Input() icon: string = '';
}
