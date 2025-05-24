import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CardMolecule} from '../../molecules/card/card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-card-grid',
  templateUrl: 'card-grid.component.html',
  styleUrls: ['card-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatGridListModule, CardMolecule, RouterLink],
  standalone: true,
})
export class CardGridOrganism {
  @Input() cards: { image: string, title: string, description: string, link: string}[] = [];
  @Input() cols: number = 3;
  @Input() rowHeight: string = '1:1';

}
