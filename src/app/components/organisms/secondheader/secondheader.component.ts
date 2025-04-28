import {Component, Input} from '@angular/core';
import {UniversalIconComponent} from '../../atoms/universal-icon/universal-icon.component';

@Component({
  selector: 'app-secondheader',
  imports: [
    UniversalIconComponent
  ],
  templateUrl: './secondheader.component.html',
  styleUrl: './secondheader.component.css'
})
export class SecondheaderComponent {
  @Input() TitlePage: string = 'NXIODEV';
}
