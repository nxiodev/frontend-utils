import { Component, Input } from '@angular/core';
import { AtomsStats } from '../../../models/atoms-stats.model';
import { TextsComponent} from '../../molecules/texts/texts.component';
import {DivTextComponent} from '../../molecules/div-text/div-text.component';
import { TextTableComponent} from '../../molecules/text-table/text-table.component';
import {CardAtomComponent} from '../../molecules/card-atom/card-atom.component';
import {CardComponent} from '../../atoms/card/card.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  standalone: true,
  imports: [TextsComponent, DivTextComponent, TextTableComponent, CardAtomComponent, CardComponent]
})
export class BodyComponent {
  @Input() dataSource: AtomsStats[] = []; // Recibe los datos de su padre
  @Input() attributeData: AtomsStats[] = [];
  @Input() title = '';
  @Input() subtitle = '';
  @Input() imageUrl = '';
  @Input() HaveContent  = '';
}
