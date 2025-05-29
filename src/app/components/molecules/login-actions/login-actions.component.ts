import { Component, Output, EventEmitter } from '@angular/core';
import { ButtonAtom } from '../../atoms/button/button.component';

@Component({
  selector: 'app-login-actions',
  standalone: true,
  imports: [ButtonAtom],
  templateUrl: './login-actions.component.html',
  styleUrls: ['./login-actions.component.css']
})
export class LoginActionsMolecule {
  @Output() signInClicked = new EventEmitter<void>();

  onSignIn() {
    this.signInClicked.emit();
  }
}
