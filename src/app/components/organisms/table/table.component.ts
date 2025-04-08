import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AtomsStats } from '../../../models/atoms-stats.model';
import {DivComponent} from '../../atoms/div/div.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule, DivComponent],
})
export class TableComponent {
  @Input() dataSource: AtomsStats[] = [];
  @Input() titleTable1!: string;

  get displayedColumns(): string[] {
    return this.dataSource.some(element => element.default !== '')
      ? ['name', 'description', 'default' ]
      : ['name', 'description'];
  }
}
