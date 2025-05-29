import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TitleCasePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule, TitleCasePipe, NgIf]
})
export class TableOrganism implements OnInit, OnChanges {
  @Input() dataSource: any[] = [];
  @Input() titleTable1!: string;

  displayedColumns: string[] = [];
  hasData = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.setColumns();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource']) {
      this.setColumns();
      this.cdr.detectChanges();
    }
  }

  private setColumns(): void {
    if (this.dataSource && this.dataSource.length > 0) {
      // Make sure we have properties in the first object
      this.displayedColumns = Object.keys(this.dataSource[0]);

      // Only set hasData true if we have both data and columns
      this.hasData = this.displayedColumns.length > 0;

      console.log('Data source:', this.dataSource);
      console.log('Columnas detectadas: ', this.displayedColumns);
    } else {
      this.hasData = false;
    }
  }
}
