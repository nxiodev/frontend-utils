import { Component, EventEmitter, Output } from '@angular/core';
import {InputAtom} from '../input/input.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-inputs',
  standalone: true,
  imports: [FormsModule, InputAtom],
  templateUrl: './login-inputs.component.html',
  styleUrls: ['./login-inputs.component.css']
})
export class LoginInputsMolecule {
  username: string = '';
  password: string = '';

  @Output() credentialsEntered = new EventEmitter<{ username: string; password: string }>();

  onInputChange() {
    this.credentialsEntered.emit({
      username: this.username,
      password: this.password
    });
  }
}
