import {Component, Input} from '@angular/core';
import {ButtonComponent} from '../../atoms/button/button.component';
import {CardComponent} from '../card/card.component';
import {CardtitleComponent} from '../../atoms/cardtitle/cardtitle.component';
import {CardsubtitleComponent} from '../../atoms/cardsubtitle/cardsubtitle.component';
import {CardimageComponent} from '../../atoms/cardimage/cardimage.component';

@Component({
  selector: 'app-full-card',
  imports: [
    CardComponent,
    CardtitleComponent,
    CardsubtitleComponent,
    CardimageComponent
  ],
  templateUrl: './full-card.component.html',
  styleUrl: './full-card.component.css'
})
export class FullCardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() imageUrl = '';
  @Input() HaveContent  = '';
}
