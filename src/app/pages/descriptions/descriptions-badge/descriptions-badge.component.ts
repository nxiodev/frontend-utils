import { Component } from '@angular/core';
import { TemplateComponent } from '../../../components/templates/template/template.component';
import { RouterModule } from '@angular/router';
import { AtomsStats } from '../../../models/atoms-stats.model';
import { BadgeComponent} from '../../../components/atoms/badge/badge.component';

// Importa ngx-highlightjs
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@Component({
  selector: 'app-descriptions-badge',
  standalone: true,
  imports: [TemplateComponent, RouterModule, BadgeComponent, HighlightModule], // Agregamos HighlightModule
  templateUrl: './descriptions-badge.component.html',
  styleUrl: './descriptions-badge.component.css',
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          html: () => import('highlight.js/lib/languages/xml') // Agregar HTML
        }
      }
    }
  ]
})
export class DescriptionsBadgeComponent {
  tableData: AtomsStats[] = [
    {name: 'Input: Boton', default: 'simona la mona pelona', description: 'Espacio para definir las propiedades del atomo'},
  ];

  attributeData: AtomsStats[] = [
    {name: 'mat-button', default: '', description: 'Rectangular text button w/ no elevation and rounded corners'},
    {name: 'mat-raised-button', default: '', description: 'Rectangular contained button w/ elevation and rounded corners'},
    {name: 'mat-flat-button', default: '', description: 'Rectangular contained button w/ no elevation and rounded corners'},
    {name: 'mat-stroked-button', default: '', description: 'Rectangular outlined button w/ no elevation and rounded corners'},
    {name: 'mat-icon-button', default: '', description: 'Circular button with a transparent background, meant to contain an icon'},
    {name: 'mat-fab', default: '', description: 'Square button w/ elevation and rounded corners, meant to contain an icon. Can be extended to a rectangle to also fit a label'},
    {name: 'mat-mini-fab', default: '', description: 'Same as mat-fab but smaller'},
  ];

  // Código de ejemplo para mostrar
  exampleCode: string = '<h1>Hola</h1>';
}
