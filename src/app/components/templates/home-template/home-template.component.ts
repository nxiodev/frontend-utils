import { Component, Input } from '@angular/core';
import { CardGridComponent } from '../../organisms/card-grid/card-grid.component';
import { NavbarComponent } from '../../organisms/navbar/navbar.component';

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.css'],
  standalone: true,
  imports: [CardGridComponent, NavbarComponent]
})
export class HomeTemplateComponent {
  @Input() cards = [
    { image: 'path/to/image1.jpg', title: 'Card 1', description: 'Description 1' },
    { image: 'path/to/image2.jpg', title: 'Card 2', description: 'Description 2' },
    { image: 'path/to/image3.jpg', title: 'Card 3', description: 'Description 3' }
  ];
  @Input() label: string = 'HomeApp';
  @Input() icon: string = 'home';
  @Input() title: string = 'Home';
  @Input() cols: number = 3;
  @Input() rowHeight: string = '1:1.5';
}
