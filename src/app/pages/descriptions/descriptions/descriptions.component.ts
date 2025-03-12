import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AtomsStats } from '../../../models/atoms-stats.model';
import { TemplateComponent } from '../../../components/templates/template/template.component';

          @Component({
            selector: 'app-descriptions',
            imports: [
              RouterModule, TemplateComponent
            ],
            templateUrl: './descriptions.component.html',
            styleUrl: './descriptions.component.css'
          })
          export class DescriptionsComponent {
            @Input() links = [
              { url: '/', name: 'Home' },
              { url: '/about', name: 'About' },
              { url: '/contact', name: 'Contact' },
              { url: '/services', name: 'Services' },
              { url: '/products', name: 'Products' },
              { url: '/faq', name: 'FAQ' },
            ];

            @Input() breads: { url: string, name: string }[] = [
              { url: '/', name: 'Home' },
              { url: '/descriptions', name: 'Descriptions' },
              { url: '/descriptions/button', name: 'Button' },
            ];

            @Input() title = 'Description Page';

            @Input() vistas: {
              dataSource: AtomsStats[],
              image: string,
              description: string,
              titleTexts: string,
              topText: string,
              titleTable1: string,
              title2: string,
              subtitle2: string,
              imageUrl2: string,
              titleTexts2: string,
              links: { url: string, name: string }[],
              breads: { url: string, name: string }[],
              title: string,
              titlePrimario: string,
            }[] = [
              {
                dataSource: [
                  { name: 'Stat1', default: 'Default1', description: 'Description1' },
                  { name: 'Stat2', default: 'Default2', description: 'Description2' },
                ],
                image: 'path/to/image1.jpg',
                description: 'This is the first description.',
                titlePrimario: 'Primary Title 1',
                titleTexts: 'Title Texts 1',
                topText: 'Top Text 1',
                titleTable1: 'Title Table 1',
                title2: 'Title 2',
                subtitle2: 'Subtitle 2',
                imageUrl2: 'path/to/image2.jpg',
                titleTexts2: 'Title Texts 2',
                links: [
                  { url: '/link1', name: 'Link 1' },
                  { url: '/link2', name: 'Link 2' },
                ],
                breads: [
                  { url: '/', name: 'Home' },
                  { url: '/descriptions', name: 'Descriptions' },
                  { url: '/descriptions/item1', name: 'Item 1' },
                ],
                title: 'Vista 1',
              },
              {
                dataSource: [
                  { name: 'Stat3', default: 'Default3', description: 'Description3' },
                  { name: 'Stat4', default: 'Default4', description: 'Description4' },
                ],
                image: 'path/to/image3.jpg',
                description: 'This is the second description.',
                titlePrimario: 'Primary Title 2',
                titleTexts: 'Title Texts 3',
                topText: 'Top Text 2',
                titleTable1: 'Title Table 2',
                title2: 'Title 3',
                subtitle2: 'Subtitle 3',
                imageUrl2: 'path/to/image4.jpg',
                titleTexts2: 'Title Texts 4',
                links: [
                  { url: '/link3', name: 'Link 3' },
                  { url: '/link4', name: 'Link 4' },
                ],
                breads: [
                  { url: '/', name: 'Home' },
                  { url: '/descriptions', name: 'Descriptions' },
                  { url: '/descriptions/item2', name: 'Item 2' },
                ],
                title: 'Vista 2',
              }
            ];
          }
