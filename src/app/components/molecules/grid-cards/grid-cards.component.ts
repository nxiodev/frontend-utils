import {Component, ViewChild, TemplateRef, OnInit, Input} from '@angular/core';
import {GridComponent} from '../../atoms/grid/grid.component';
import {CardComponent} from '../../atoms/card/card.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatCardImage} from '@angular/material/card';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-grid-cards',
  templateUrl: 'grid-cards.component.html',
  imports: [GridComponent, CardComponent, RouterLink, ]
})
export class GridCardsComponent implements OnInit {
  @ViewChild('template1') template1!: TemplateRef<any>;
  @ViewChild('template2') template2!: TemplateRef<any>;
  @ViewChild('template3') template3!: TemplateRef<any>;
  @ViewChild('template4') template4!: TemplateRef<any>;
  @ViewChild('template5') template5!: TemplateRef<any>;
  @ViewChild('template6') template6!: TemplateRef<any>;
  @ViewChild('template7') template7!: TemplateRef<any>;
  @ViewChild('template8') template8!: TemplateRef<any>;

  gridTemplates: { template: TemplateRef<any> }[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.gridTemplates = [
        { template: this.template1 },
        { template: this.template2 },
        { template: this.template3 },
        { template: this.template4 },
        { template: this.template5 },
        { template: this.template6 },
        { template: this.template7 },
        { template: this.template8 },
      ];

      console.log(this.gridTemplates); // Verify if they are correctly assigned
    });
  }
}
