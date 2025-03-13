import { Component, Input, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { CommonModule } from '@angular/common';
  import { AtomsStats } from '../../../models/atoms-stats.model';
  import { TemplateComponent } from '../../../components/templates/template/template.component';

  @Component({
    selector: 'app-descriptions',
    imports: [
      CommonModule,
      TemplateComponent
    ],
    templateUrl: './descriptions.component.html',
    styleUrl: './descriptions.component.css',
    standalone: true
  })
  export class DescriptionsComponent implements OnInit {
    @Input() links = [
      { url: '/', name: 'Home' },
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
          { url: '/descriptions?button', name: 'Button' },
          { url: '/descriptions?badge', name: 'Badge' },
          { url: '/descriptions?card', name: 'Card' },
          { url: '/descriptions?checkbox', name: 'Checkbox' },
          { url: '/descriptions?grid', name: 'Grid' },
          { url: '/descriptions?progressspinner', name: 'Progress Spinner' },
          { url: '/descriptions?icon', name: 'Icon' },
        ],
        breads: [
          { url: '/', name: 'Home' },
          { url: '/descriptions', name: 'Descriptions' },
          { url: '/descriptions/item1', name: 'Item 1' },
        ],
        title: 'Boton',
      }
    ];

    type: string | null = null;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.type = params.get('type');
        // You can now use this.type to filter or fetch data based on the type parameter
      });
    }
  }
