import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {NgIf} from '@angular/common';

/**
 * @title Card with media size
 */
@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrl: 'card.component.css',
  imports: [MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush, //OnPush
})
export class CardComponent {

}
