import {Component, Input} from '@angular/core';
import {MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-cardtitle',
    imports: [
        MatCardTitle
    ],
  templateUrl: './cardtitle.component.html',
  styleUrl: './cardtitle.component.css'
})
export class CardtitleComponent {
@Input() title: string = '';
}
