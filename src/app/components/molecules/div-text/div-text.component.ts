import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-div-text',
  imports: [],
  templateUrl: './div-text.component.html',
  styleUrl: './div-text.component.css'
})
export class DivTextComponent {
  @Input() topText: string = '';
}
