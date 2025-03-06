import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; // Importa MatIconModule
import { MatButtonModule } from '@angular/material/button'; // Importa MatIconModule

@Component({
  selector: 'app-button',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
