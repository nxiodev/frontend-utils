import { Component } from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-sidenav',
  imports: [MatSidenav, MatSidenavContainer, MatNativeDateModule, MatButtonModule,
    CommonModule, MatSidenavModule, RouterModule],
  templateUrl: 'sidenav.component.html',
  styleUrl: 'sidenav.component.css'
})

export class SidenavComponent {

}
