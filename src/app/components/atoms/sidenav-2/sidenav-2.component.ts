import {Component} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-sidenav-2',
  imports: [MatSidenav, MatNativeDateModule, MatButtonModule,
    CommonModule, MatSidenavModule, RouterModule],
  templateUrl: './sidenav-2.component.html',
  styleUrl: './sidenav-2.component.css'
})
export class Sidenav2Component {

}
