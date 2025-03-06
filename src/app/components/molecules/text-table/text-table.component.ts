import { Component, Input} from '@angular/core';
import {TableComponent} from "../../atoms/table/table.component";
import { AtomsStats } from '../../../models/atoms-stats.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-text-table',
    imports: [
        TableComponent, CommonModule
    ],
  templateUrl: './text-table.component.html',
  styleUrl: './text-table.component.css'
})
export class TextTableComponent {
  @Input() dataSource: AtomsStats[] = [];
  @Input() attributeData: AtomsStats[] = [];
}
