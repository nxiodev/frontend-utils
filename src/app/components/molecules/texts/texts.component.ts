import { Component,Input } from '@angular/core';
import {CardMolecule} from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-texts',
  imports: [
    CardMolecule,
    CommonModule
  ],
  templateUrl: './texts.component.html',
  styleUrl: './texts.component.css',
  standalone: true
})
export class TextsMolecule {
  @Input() image:string = '';
  @Input() title:string = '';
  @Input() description:string = '';
  @Input() titleTexts:string = '';
}

