import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {SidenavComponent} from './components/organisms/sidenav/sidenav.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet], // Agrega los módulos necesarios
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrección de `styleUrl`
})
export class AppComponent {
  title = 'Galeria';
}
