import { Component,Input } from '@angular/core';
import {UniversalIconAtom} from '../../atoms/universal-icon/universal-icon.component';

@Component({
  selector: 'app-icons-group',
  imports: [
    UniversalIconAtom
  ],
  templateUrl: './icons-group.component.html',
  styleUrl: './icons-group.component.css'
})
export class IconsGroupMolecules {
  @Input() FirstIcon: string = '';
  @Input() SecondIcon: string = "";
  @Input() ThirdIcon: string = "";
}
