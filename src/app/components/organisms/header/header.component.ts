import { Component } from '@angular/core';
import {ToolbarComponent} from '../../atoms/toolbar/toolbar.component';
import {BreadcrumbComponent} from '../../atoms/breadcrumb/breadcrumb.component';
import {SidenavComponent} from '../../atoms/sidenav/sidenav.component';
import {MatNavList} from '@angular/material/list';


@Component({
  selector: 'app-header',
  imports: [ToolbarComponent, BreadcrumbComponent, SidenavComponent, MatNavList],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'

})
export class HeaderComponent {

}
