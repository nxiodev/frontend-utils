import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

/**
 * @title Badge overview
 */
@Component({
  selector: 'app-badge',
  templateUrl: 'badge.component.html',
  styleUrl: 'badge.component.css',
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
})
export class BadgeComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
