import {Component} from '@angular/core';
import {HomeTemplateComponent} from '../../components/templates/home-template/home-template.component';

interface ngOnInit {
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [HomeTemplateComponent]
})
export class HomeComponent  {
  cards = [
    {image: '', title: 'ATOMIC', description: 'CACOMIC'},
    {image: '', title: 'F*asdfjk', description: 'DI'},
    {image: '', title: 'DESIGN', description: 'SAIN'}
  ];
  cols = 3;
  icon = 'home';
  label = 'Nxuni';
  rowHeight = '1:1.5';
  title = 'Nxuni';

}
