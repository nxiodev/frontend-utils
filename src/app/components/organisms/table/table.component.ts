import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TableOrganism {
  @Input() dataSource: any[] = [];
  @Input() titleTable1!: string;

  get displayedColumns(): string[] {
    console.log('this.dataSource', this.dataSource);
    return this.dataSource.some(element => element.default !== '')
      ? ['name', 'description', 'default' ]
      : ['name', 'description'];
  }
}
