import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';
import {SidenavOrganism} from '../../organisms/sidenav/sidenav.component';
import {SecondHeaderOrganism} from '../../organisms/secondheader/secondheader.component';
import {CardMolecule} from '../../molecules/card/card.component';

@Component({
  selector: 'app-mainhome-template',
  imports: [
    SidenavOrganism,
    SecondHeaderOrganism,
    CardMolecule,
    RouterLink,
    NgForOf,
  ],
  templateUrl: './mainhome-template.component.html',
  styleUrls: ['./mainhome-template.component.css']
})
export class MainhomeTemplate {
  @Input() links: { url:string, name: string, icon:string }[] = [];
  @Input() cards: { image: string, title: string, description: string, link: string }[] = [];
}
