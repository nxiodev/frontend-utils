import { Component, Input } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {ButtonComponent} from '../../atoms/button/button.component';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  standalone: true,
  imports: [
    MatIcon,
    ButtonComponent
  ],
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
}
