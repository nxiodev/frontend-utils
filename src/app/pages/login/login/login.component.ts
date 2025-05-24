import {Component, Input} from '@angular/core';
import {LoginTemplate} from '../../../components/templates/login-template/login-template.component';

@Component({
  selector: 'app-login',
  imports: [
    LoginTemplate
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fondoLogin: string = "assets/images/login.png";
  LoginTitle: string = 'Hello Again!';
  LoginSubtitle: string = 'You have have been missed';
}
