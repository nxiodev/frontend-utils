import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-universal-icon',
  imports: [],
  templateUrl: './universal-icon.component.html',
  styleUrl: './universal-icon.component.css'
})
export class UniversalIconComponent {
@Input() IconName: string = '';
}
