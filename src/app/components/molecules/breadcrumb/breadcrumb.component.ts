import { Component,Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {ToolbarAtom} from '../../atoms/toolbar/toolbar.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  imports: [MatToolbarModule, MatButtonModule, RouterModule, ToolbarAtom, NgForOf],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbMolecule {
  @Input() breads: {url: string, name: string}[] = [];
}
