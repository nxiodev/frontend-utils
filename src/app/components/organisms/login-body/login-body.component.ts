import { Component, Input } from '@angular/core';
import {LoginActionsMolecule} from "../../molecules/login-actions/login-actions.component";
import {LoginContainerMolecule} from "../../molecules/login-container/login-container.component";
import {LoginIconsOrganism} from "../login-icons/login-icons.component";
import {LoginInputsMolecule} from "../../molecules/login-inputs/login-inputs.component";

@Component({
  selector: 'app-login-body',
    imports: [
        LoginActionsMolecule,
        LoginContainerMolecule,
        LoginIconsOrganism,
        LoginInputsMolecule
    ],
  templateUrl: './login-body.component.html',
  styleUrl: './login-body.component.css'
})
export class LoginBodyComponent {
  @Input() LoginTitle: string = 'Hello Again!';
  @Input() LoginSubtitle: string = 'You have have been missed';
}
