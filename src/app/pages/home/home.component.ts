import {Component} from '@angular/core';
import {HomeTemplate} from '../../components/templates/home-template/home-template.component';

interface ngOnInit {
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [HomeTemplate]
})
export class HomeComponent  {
  cards = [
    {
      image: 'https://material.angular.io/assets/screenshots/button.scene.png',
      title: 'Button',
      description: 'Componente interactivo que inicia acciones predeterminadas al hacer clic.',
      link: '/descriptions/button'
    },
    {
      image: 'https://material.angular.io/assets/screenshots/card.scene.png',
      title: 'Card',
      description: 'Contenedor flexible con contenido multimedia, texto y acciones personalizadas.',
      link: '/descriptions/card'
    },
    {
      image: 'https://material.angular.io/assets/screenshots/icon.scene.png',
      title: 'Icon',
      description: 'Componente para mostrar íconos visuales que representan acciones o estados.',
      link: '/descriptions/icon'
    },
    {
      image: 'https://material.angular.io/assets/screenshots/progress-spinner.scene.png',
      title: 'Progress Spinner',
      description: 'Componente circular que indica visualmente el progreso de una acción.',
      link: '/descriptions/progress-spinner'
    },
    {
      image: 'https://material.angular.io/assets/screenshots/grid-list.scene.png',
      title: 'Grid',
      description: 'Sistema de diseño estructurado que organiza contenido en filas y columnas.',
      link: '/descriptions/grid'
    },
    {
      image: 'https://material.angular.io/assets/screenshots/checkbox.scene.png',
      title: 'Checkbox',
      description: 'Componente que permite la selección múltiple o la activación de opciones.',
      link: '/descriptions/checkbox'
    },
    {
      image: 'https://material.angular.io/assets/screenshots/badge.scene.png',
      title: 'Badge',
      description: 'Etiqueta visual que muestra contadores o indicadores asociados a elementos.',
      link: '/descriptions/badge'
    }
  ];

  cols = 3;
  icon = 'home';
  label = '';
  rowHeight = '400px';
  title = 'Pagina';

}
