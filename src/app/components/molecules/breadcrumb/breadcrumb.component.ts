import { Component,Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {ToolbarComponent} from '../../atoms/toolbar/toolbar.component';
import {NgForOf} from '@angular/common';
import {AComponent} from '../../atoms/a/a.component';

@Component({
  selector: 'app-breadcrumb',
  imports: [MatToolbarModule, MatButtonModule, RouterModule, ToolbarComponent, NgForOf, AComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
  @Input() breads: {url: string, name: string}[] = [];
}
