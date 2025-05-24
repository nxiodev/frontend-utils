import {Component, Input} from '@angular/core';
import {DivFondoAtom} from '../../atoms/div-fondo/div-fondo.component';
import {LoginBodyComponent} from '../../organisms/login-body/login-body.component';

@Component({
  selector: 'app-login-template',
  imports: [
    DivFondoAtom,
    LoginBodyComponent
  ],
  templateUrl: './login-template.component.html',
  styleUrl: './login-template.component.css'
})
export class LoginTemplate {
  @Input() fondoLogin: string = "assets/images/login.png";
  @Input() LoginTitle: string = 'Hello Again!';
  @Input() LoginSubtitle: string = 'You have have been missed';
}
