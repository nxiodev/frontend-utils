import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-login-container',
  imports: [],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.css'
})
export class LoginContainerMolecule {
 @Input() LoginTitle: string = "";
 @Input() LoginSubtitle: string = "";

}
