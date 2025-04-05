import { Component, Input } from '@angular/core';
import { BreadcrumbComponent } from '../../molecules/breadcrumb/breadcrumb.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [BreadcrumbComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() breads: { url: string, name: string }[] = [];
  @Input() isSidenavOpen: number = 0;
}

//TODO: Revisar si funciona BREADS
