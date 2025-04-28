import { Component, Input } from '@angular/core';
import { AtomsStats } from '../../../models/atoms-stats.model';
import { TextsComponent} from '../../molecules/texts/texts.component';
import {TableComponent} from '../table/table.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  standalone: true,
  imports: [TextsComponent, TableComponent,]
})

export class BodyComponent {
  @Input() dataSource: AtomsStats[] = []; // Recibe los datos de su padre
  @Input() image:string = '';
  @Input() title:string = '';
  @Input() description:string = '';
  @Input() titleTexts:string = '';
  @Input() topText:string = '';
  @Input() isSidenavOpen: number = 0;
  @Input() titleTable1:string = '';
  @Input() title2:string = '';
  @Input() subtitle2:string = '';
  @Input() imageUrl2:string = '';
  @Input() titleTexts2:string = '';


}
