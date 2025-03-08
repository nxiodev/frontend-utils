import { Component, Input } from '@angular/core';
import { MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  templateUrl: 'grid.component.html',
  imports: [MatGridListModule, CommonModule]
})
export class GridComponent {
  @Input() grids: { template: any }[] = [];
  @Input() cols: number = 2;
  @Input() rowHeight: string = '100px';
}
