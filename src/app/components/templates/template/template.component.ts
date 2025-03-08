import {Component, Input} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from '../../organisms/header/header.component';
import {BodyComponent} from '../../organisms/body/body.component';
import { AtomsStats } from '../../../models/atoms-stats.model';
import {MatListItem} from '@angular/material/list';

@Component({
  selector: 'app-template',
  imports: [
    RouterModule, HeaderComponent, BodyComponent, MatListItem
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  @Input() dataSource: AtomsStats[] = [];
  @Input() attributeData: AtomsStats[] = [];
  @Input() title = '';
  @Input() subtitle = '';
  @Input() imageUrl = '';
  @Input() HaveContent  = '';
}
