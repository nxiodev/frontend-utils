import { Component, Input, OnInit, OnDestroy } from '@angular/core';
    import { RouterModule } from '@angular/router';
    import { BodyOrganism } from '../../organisms/body/body.component';
    import { AtomsStats } from '../../../models/atoms-stats.model';
    import { SidenavOrganism } from '../../organisms/sidenav/sidenav.component';
    import { SidenavService } from '../../../services/sidenav.service';
    import { Subscription } from 'rxjs';
import {NgIf} from '@angular/common';
import {SecondHeaderOrganism} from '../../organisms/secondheader/secondheader.component';

    @Component({
      selector: 'app-template',
      standalone: true,
      imports: [
        RouterModule, BodyOrganism, SidenavOrganism, SecondHeaderOrganism
      ],
      templateUrl: './template.component.html',
      styleUrl: './template.component.css'
    })
    export class TemplateComponent implements OnInit, OnDestroy {
      isSidenavOpen = false;
      private sidenavSubscription: Subscription | null = null;

      @Input() links = [
        { url: '/descriptions?button', name: 'Button', icon: '' },
        { url: '/descriptions?badge', name: 'Badge', icon: '' },
        { url: '/descriptions?input', name: 'Input', icon: '' },
        { url: '/descriptions?icon', name: 'Icon', icon: '' },
        { url: '/descriptions?card', name: 'Card', icon: '' },
        { url: '/descriptions?progressspinner', name: 'Progress Spinner', icon: '' },
        { url: '/descriptions?checkbox', name: 'CheckBox', icon: '' },
        { url: '/descriptions?grid', name: 'Grid', icon: '' },
      ];

      @Input() breads: { url: string, name: string }[] = [
        { url: '/', name: 'Home' },
        { url: '/descriptions', name: 'Descriptions' },
        { url: '/descriptions/button', name: 'button' },
      ];
      @Input() title = '';
      @Input() dataSource: AtomsStats[] = []; // Recibe los datos de su padre
      @Input() image:string = '';
      @Input() titlePrimario:string = '';
      @Input() description:string = '';
      @Input() titleTexts:string = '';
      @Input() topText:string = '';
      @Input() titleTable1:string = '';
      @Input() title2:string = '';
      @Input() subtitle2:string = '';
      @Input() imageUrl2:string = '';
      @Input() titleTexts2:string = '';

      constructor(private sidenavService: SidenavService) {}

      ngOnInit() {
        this.sidenavSubscription = this.sidenavService.isOpen$.subscribe(state => {
          this.isSidenavOpen = state;
        });
      }

      ngOnDestroy() {
        if (this.sidenavSubscription) {
          this.sidenavSubscription.unsubscribe();
        }
      }

      toggleSidenav() {
        this.sidenavService.toggle();
      }
    }
