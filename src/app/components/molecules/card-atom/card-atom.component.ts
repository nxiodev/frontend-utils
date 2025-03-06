import {Component, Input} from '@angular/core';
import {CardComponent} from '../../atoms/card/card.component';

@Component({
  selector: 'app-card-atom',
  imports: [CardComponent],
  templateUrl: './card-atom.component.html',
  styleUrl: './card-atom.component.css'
})
export class CardAtomComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() imageUrl = '';
  @Input() HaveContent  = '';

}
