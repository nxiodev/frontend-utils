import { Component } from '@angular/core';

import {GridCardsComponent} from '../../components/grid-cards/grid-cards.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  imports: [GridCardsComponent, ],
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
