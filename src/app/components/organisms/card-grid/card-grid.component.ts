import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CardComponent} from '../../molecules/card/card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-card-grid',
  templateUrl: 'card-grid.component.html',
  styleUrls: ['card-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatGridListModule, CardComponent],
  standalone: true,
})
export class CardGridComponent {
  @Input() cards: { image: string, title: string, description: string }[] = [];
  @Input() cols: number = 3;
  @Input() rowHeight: string = '1:1';
}
