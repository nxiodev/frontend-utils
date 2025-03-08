import {Component, Input} from '@angular/core';
import {MatCardImage} from "@angular/material/card";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-cardimage',
    imports: [
        MatCardImage
    ],
  templateUrl: './cardimage.component.html',
  styleUrl: './cardimage.component.css'
})
export class CardimageComponent {
@Input() imageUrl: string = '';
}
