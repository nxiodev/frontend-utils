import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-universal-icon',
  imports: [],
  templateUrl: './universal-icon.component.html',
  standalone: true,
  styleUrl: './universal-icon.component.css'
})
export class UniversalIconAtom {
@Input() IconName: string = '';
}
