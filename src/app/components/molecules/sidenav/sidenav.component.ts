import { Component, Input} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatListItem} from '@angular/material/list';


@Component({
  selector: 'app-sidenav',
  imports: [MatSidenav, MatNativeDateModule, MatButtonModule,
    CommonModule, MatSidenavModule, RouterModule, MatListItem],
  templateUrl: 'sidenav.component.html',
  styleUrl: 'sidenav.component.css'
})

export class SidenavComponent {
@Input() links: {url: string, name: string}[] = [];
}
