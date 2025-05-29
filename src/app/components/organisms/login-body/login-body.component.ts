import { Component, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import {LoginContainerMolecule} from '../../molecules/login-container/login-container.component';
import {LoginInputsMolecule} from '../../molecules/login-inputs/login-inputs.component';
import {LoginActionsMolecule} from '../../molecules/login-actions/login-actions.component';
import {LoginIconsOrganism} from '../login-icons/login-icons.component';

@Component({
  selector: 'app-login-body',
  standalone: true,
  imports: [
    LoginContainerMolecule,
    LoginInputsMolecule,
    LoginActionsMolecule,
    LoginIconsOrganism,
    // tus moleculas y atomos
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
  }

  async onSignInClicked() {
    try {
      const token = await this.dataService.login(this.username, this.password);
      console.log('Token guardado:', token);
      this.router.navigate(['/dashboard']); // o la ruta a tu home
    } catch (err) {
      alert('Credenciales incorrectas');
    }
  }
}
