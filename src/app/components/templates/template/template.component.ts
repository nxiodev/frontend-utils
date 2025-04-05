import { Component, Input, OnInit, OnDestroy } from '@angular/core';
    import { RouterModule } from '@angular/router';
    import { HeaderComponent } from '../../organisms/header/header.component';
    import { BodyComponent } from '../../organisms/body/body.component';
    import { AtomsStats } from '../../../models/atoms-stats.model';
    import { SidenavComponent } from '../../molecules/sidenav/sidenav.component';
    import { SidenavService } from '../../../services/sidenav.service';
    import { Subscription } from 'rxjs';
import {NgIf} from '@angular/common';

    @Component({
      selector: 'app-template',
      standalone: true,
      imports: [
        RouterModule, HeaderComponent, BodyComponent, SidenavComponent
      ],
      templateUrl: './template.component.html',
      styleUrl: './template.component.css'
    })
    export class TemplateComponent implements OnInit, OnDestroy {
      isSidenavOpen = false;
      private sidenavSubscription: Subscription | null = null;

      @Input() links = [
        { url: '/descriptions?button', name: 'Button' },
        { url: '/descriptions?badge', name: 'Badge' },
        { url: '/descriptions?input', name: 'Input' },
        { url: '/descriptions?icon', name: 'Icon' },
        { url: '/descriptions?card', name: 'Card' },
        { url: '/descriptions?progressspinner', name: 'Progress Spinner' },
        { url: '/descriptions?checkbox', name: 'CheckBox' },
        { url: '/descriptions?grid', name: 'Grid' },
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
