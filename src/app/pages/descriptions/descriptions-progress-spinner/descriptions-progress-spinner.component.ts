import { Component } from '@angular/core';
import { TemplateComponent } from '../../../components/templates/template/template.component';
import { RouterModule } from '@angular/router';
import { AtomsStats } from '../../../models/atoms-stats.model';
import { ProgressSpinnerComponent} from '../../../components/atoms/progress-spinner/progress-spinner.component';

// Importa ngx-highlightjs
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@Component({
  selector: 'app-descriptions-button',
  standalone: true,
  imports: [TemplateComponent, RouterModule, ProgressSpinnerComponent, HighlightModule], // Agregamos HighlightModule
  templateUrl: './descriptions-progress-spinner.component.html',
  styleUrl: './descriptions-progress-spinner.component.css',
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
export class DescriptionsProgressSpinnerComponent {
  tableData: AtomsStats[] = [
    {name: 'Input: Boton', default: 'simona la mona pelona', description: 'Espacio para definir las propiedades del atomo'},
  ];

  attributeData: AtomsStats[] = [
    {name: 'determinate', default: '', description: '\tStandard progress indicator, fills from 0% to 100%'},
    {name: 'indeterminate', default: '', description: 'Indicates that something is happening without conveying a discrete progress'},
  ];

  // Código de ejemplo para mostrar
  exampleCode: string = '<h1>Hola</h1>';
}
