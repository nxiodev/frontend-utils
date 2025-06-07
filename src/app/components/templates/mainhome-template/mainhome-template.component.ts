import { Component, Input } from '@angular/core';
import {SidenavOrganism} from '../../organisms/sidenav/sidenav.component';
import {SecondHeaderOrganism} from '../../organisms/secondheader/secondheader.component';
import {CardsbodyOrganism} from '../../organisms/cardsbody/cardsbody.component';

@Component({
  selector: 'app-mainhome-template',
  imports: [
    SidenavOrganism,
    SecondHeaderOrganism,
    CardsbodyOrganism,
  ],
  templateUrl: './mainhome-template.component.html',
  styleUrls: ['./mainhome-template.component.css']
})
export class MainhomeTemplate {
  @Input() links: { url:string, name: string, icon:string }[] = [];
  @Input() cards: { image: string, title: string, description: string, link: string }[] = [];
}
