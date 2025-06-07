import { Component, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import { LoginContainerMolecule } from '../../molecules/login-container/login-container.component';
import { LoginInputsMolecule } from '../../molecules/login-inputs/login-inputs.component';
import { LoginActionsMolecule } from '../../molecules/login-actions/login-actions.component';
import { LoginIconsOrganism } from '../login-icons/login-icons.component';

@Component({
  selector: 'app-login-body',
  standalone: true,
  imports: [
    LoginContainerMolecule,
    LoginInputsMolecule,
    LoginActionsMolecule,
    LoginIconsOrganism
  ],
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.css']
})
export class LoginBodyComponent {
  @Input() LoginTitle: string = 'Hello Again!';
  @Input() LoginSubtitle: string = 'You have have been missed';
  username: string = '';
  password: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  onCredentialsEntered(credentials: { username: string; password: string }) {
    this.username = credentials.username;
    this.password = credentials.password;
    console.log('Credenciales recibidas:', this.username);
  }

  async onSignInClicked() {
    console.log('Iniciando sesión con:', this.username);

    if (!this.username || !this.password) {
      alert('Por favor introduce usuario y contraseña');
      return;
    }

    try {
      const token = await this.dataService.login(this.username, this.password);

      // Verificar que la navegación se ejecuta
      await this.router.navigate(['/home']);
    } catch (err) {
      console.error('Error durante el login:', err);
      alert('Credenciales incorrectas');
    }
  }
}
