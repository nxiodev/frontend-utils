// chips.component.ts
import { Component, Input } from '@angular/core';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css'],
  imports: [MatChip]
})
export class ChipsComponent {
  @Input() imageSrc!: string;
  @Input() imageAlt!: string;
  @Input() chipLabel!: string;
}
