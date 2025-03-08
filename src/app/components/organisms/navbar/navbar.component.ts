import { Component, Input } from '@angular/core';
import {MenuItemComponent} from '../../molecules/menu-item/menu-item.component';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [MenuItemComponent, MatToolbar],
  standalone: true,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
}
