import {Component, Input} from '@angular/core';
import {MatCardSubtitle} from "@angular/material/card";

@Component({
  selector: 'app-cardsubtitle',
    imports: [
        MatCardSubtitle
    ],
  templateUrl: './cardsubtitle.component.html',
  styleUrl: './cardsubtitle.component.css'
})
export class CardsubtitleComponent {
  @Input() subtitle = '';
}
