import {Component, Input} from '@angular/core';
import {CardMolecule} from "../../molecules/card/card.component";
import {NgForOf} from "@angular/common";
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-cardsbody',
  imports: [
    CardMolecule,
    NgForOf,
    RouterLink
  ],
  templateUrl: './cardsbody.component.html',
  styleUrl: './cardsbody.component.css'
})
export class CardsbodyOrganism {
  @Input() cards: { image: string, title: string, description: string, link: string }[] = [];
}
