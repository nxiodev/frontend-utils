import {Component, Input} from '@angular/core';
import {InputComponent} from '../../../components/molecules/input/input.component';
import {ButtonComponent} from '../../../components/atoms/button/button.component';
import {UniversalIconComponent} from '../../../components/atoms/universal-icon/universal-icon.component';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    InputComponent,
    ButtonComponent,
    UniversalIconComponent,
    NgStyle
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() fondoLogin: string = "assets/images/login.png";
}
