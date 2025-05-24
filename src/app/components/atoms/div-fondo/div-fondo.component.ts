import { Component, Input } from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-div-fondo',
  imports: [
    NgStyle
  ],
  templateUrl: './div-fondo.component.html',
  styleUrl: './div-fondo.component.css'
})
export class DivFondoAtom {
  @Input() fondoLogin: string = "";
}
