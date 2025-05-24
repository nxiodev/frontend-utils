import {Component, Input} from '@angular/core';
import {UniversalIconAtom} from '../../atoms/universal-icon/universal-icon.component';

@Component({
  selector: 'app-secondheader',
  imports: [
    UniversalIconAtom
  ],
  templateUrl: './secondheader.component.html',
  styleUrl: './secondheader.component.css',
  standalone: true,
})
export class SecondHeaderOrganism {
  @Input() TitlePage: string = 'NXIODEV';
}
