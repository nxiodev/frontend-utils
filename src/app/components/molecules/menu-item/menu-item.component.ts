import { Component, Input } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {ButtonAtom} from '../../atoms/button/button.component';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  standalone: true,
  imports: [
    MatIcon,
    ButtonAtom
  ],
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemMolecule {
  @Input() label: string = '';
  @Input() icon: string = '';
}
