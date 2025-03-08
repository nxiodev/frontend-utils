import { Component } from '@angular/core';
import { TemplateComponent } from '../../../components/templates/template/template.component';
import { RouterModule } from '@angular/router';
import { AtomsStats } from '../../../models/atoms-stats.model';
import { GridComponent} from '../../../components/atoms/grid/grid.component';

// Importa ngx-highlightjs
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@Component({
  selector: 'app-descriptions-grid',
  standalone: true,
  imports: [TemplateComponent, RouterModule, HighlightModule], // Agregamos HighlightModule
  templateUrl: './descriptions-grid.component.html',
  styleUrl: './descriptions-grid.component.css',
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
export class DescriptionsGridComponent {
  tableData: AtomsStats[] = [
    {name: 'Input: Boton', default: 'simona la mona pelona', description: 'Espacio para definir las propiedades del atomo'},
  ];

  attributeData: AtomsStats[] = [
    {name: 'Fixed height:', default: '', description: 'The height can be in px, em, or rem. If no units are specified, px units are assumed (e.g. 100px, 5em, 250).'},
    {name: 'Ratio', default: '', description: 'This ratio is column-width:row-height, and must be passed in with a colon, not a decimal (e.g. 4:3).'},
    {name: 'Fit', default: '', description: 'Setting rowHeight to fit This mode automatically divides the available height by the number of rows. Please note the height of the grid-list or its container must be set.'}
  ];

  // Código de ejemplo para mostrar
  exampleCode: string = '<h1>Hola</h1>';
}
