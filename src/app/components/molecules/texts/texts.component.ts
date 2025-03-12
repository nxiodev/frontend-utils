import { Component,Input } from '@angular/core';
import {CardComponent} from '../card/card.component';

@Component({
  selector: 'app-texts',
  imports: [
    CardComponent
  ],
  templateUrl: './texts.component.html',
  styleUrl: './texts.component.css'
})
export class TextsComponent {
  @Input() image:string = '';
  @Input() title:string = '';
  @Input() description:string = '';
  @Input() titleTexts:string = '';
}

