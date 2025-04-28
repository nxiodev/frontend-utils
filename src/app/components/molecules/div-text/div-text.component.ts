import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { } from '../../atoms/div/div.component';

@Component({
  selector: 'app-div-text',
  imports: [CommonModule,  ],
  templateUrl: './div-text.component.html',
  styleUrl: './div-text.component.css',
  standalone: true
})
export class DivTextComponent {
  @Input() topText: string = '';
}
