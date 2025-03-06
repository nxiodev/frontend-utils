import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

/**
 * @title Chips avatar
 * @description An avatar inside a chip
 */
@Component({
  selector: 'app-chips',
  templateUrl: 'chips.component.html',
  styleUrl: 'chips.component.css',
  imports: [MatChipsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsComponent {}
