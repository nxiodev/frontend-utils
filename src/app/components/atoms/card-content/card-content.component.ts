import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card-content',
  imports: [],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.css'
})
export class CardContentComponent {
@Input() HaveContent: string = '';
}
