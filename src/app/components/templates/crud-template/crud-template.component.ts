import {Component, Input} from '@angular/core';
import {SecondHeaderOrganism} from "../../organisms/secondheader/secondheader.component";
import {SidenavOrganism} from "../../organisms/sidenav/sidenav.component";
import {TableOrganism} from "../../organisms/table/table.component";
import {AtomsStats} from '../../../models/atoms-stats.model';

@Component({
  selector: 'app-crud-template',
    imports: [
        SecondHeaderOrganism,
        SidenavOrganism,
        TableOrganism
    ],
  templateUrl: './crud-template.component.html',
  styleUrl: './crud-template.component.css'
})
export class CrudTemplate {
  @Input() links  = [
    { url: '/descriptions?button', name: '', icon: 'fa-solid fa-bars' },
  ];
  @Input() dataSource: AtomsStats[] = [
    {
      name: 'Donovan',
      description: 'donovanivanq@gmail.com',
      default: 'active'
    },

  ];
}
