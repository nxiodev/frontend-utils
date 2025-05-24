import { Component, Input } from '@angular/core';
import { BreadcrumbMolecule } from '../../molecules/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-header',
  imports: [BreadcrumbMolecule,  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderOrganism {
  @Input() title: string = '';
  @Input() breads: { url: string, name: string }[] = [];
  @Input() isSidenavOpen: number = 0;
}

//TODO: Revisar si funciona BREADS
