import { ViewChild, OnInit, HostListener } from '@angular/core';
import { Component, Input } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListItem } from '@angular/material/list';
import { ButtonComponent } from '../../atoms/button/button.component';
import { SidenavService} from '../../../services/sidenav.service';
import {IconComponent} from '../../atoms/icon/icon.component';
import {UniversalIconComponent} from '../../atoms/universal-icon/universal-icon.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenav, MatNativeDateModule, MatButtonModule,
    CommonModule, MatSidenavModule, RouterModule, MatListItem, ButtonComponent, IconComponent, UniversalIconComponent,
  ],
  templateUrl: 'sidenav.component.html',
  styleUrl: 'sidenav.component.css'
})
export class SidenavComponent implements OnInit {
  @Input() links: { url: string, name: string, icon: string}[] = [];
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isMobile = false;
  isSidenavOpen = false;  // Estado del sidenav

  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {
    this.checkScreenSize();

    // Suscribirse al estado del sidenav
    this.sidenavService.isOpen$.subscribe(state => {
      this.isSidenavOpen = state;
      if (this.sidenav) {
        this.sidenav.opened = state;
      }
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 769;
    this.sidenavService.setState(!this.isMobile);  // Cambiar estado global del sidenav
  }

  toggleSidenav() {
    this.sidenavService.toggle();  // Alternar el estado del sidenav
  }

  // 🔹 Cierra el sidenav en móvil cuando se hace clic en un enlace
  onLinkClick() {
    if (this.isMobile) {
      this.sidenavService.setState(false);
    }
  }
}
