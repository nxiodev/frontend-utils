import { Component,Input } from '@angular/core';
import {CardComponent} from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-texts',
  imports: [
    CardComponent,
    CommonModule
  ],
  templateUrl: './texts.component.html',
  styleUrl: './texts.component.css',
  standalone: true
})
export class TextsComponent {
  @Input() image:string = '';
  @Input() title:string = '';
  @Input() description:string = '';
  @Input() titleTexts:string = '';
}

