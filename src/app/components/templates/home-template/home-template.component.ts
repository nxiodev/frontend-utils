import { Component, Input } from '@angular/core';
    import { CardGridOrganism } from '../../organisms/card-grid/card-grid.component';
import {SidenavOrganism} from '../../organisms/sidenav/sidenav.component';
import {SecondHeaderOrganism} from '../../organisms/secondheader/secondheader.component';

    @Component({
      selector: 'app-home-template',
      templateUrl: './home-template.component.html',
      styleUrls: ['./home-template.component.css'],
      standalone: true,
      imports: [CardGridOrganism, SidenavOrganism, SecondHeaderOrganism]
    })
    export class HomeTemplate {
      @Input() links: { url:string, name: string, icon:string }[] = [];
      @Input() cards = [
        { image: 'http://imagen.jpg', title: 'Card 1', description: 'Description 1',link: '/descriptions/button' },
        { image: 'path/to/image2.jpg', title: 'Card 2', description: 'Description 2', link: '/descriptions/card' },
        { image: 'path/to/image3.jpg', title: 'Card 3', description: 'Description 3', link: '/descriptions/card' },
      ];
      @Input() label: string = 'HomeApp';
      @Input() icon: string = 'home';
      @Input() title: string = 'Home';
      @Input() cols: number = 3;
      @Input() rowHeight: string = '1:1.5';
    }
