import { Component, Input } from '@angular/core';
import { BreadcrumbComponent } from '../../molecules/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-header',
  imports: [BreadcrumbComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() breads: { url: string, name: string }[] = [];
}

//TODO: Revisar si funciona BREADS
