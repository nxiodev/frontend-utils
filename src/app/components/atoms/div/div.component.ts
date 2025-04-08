import {Component, Input, OnInit} from '@angular/core';
  import {NgClass, NgStyle} from '@angular/common';

  @Component({
    selector: 'app-div',
    standalone: true,
    imports: [
      NgClass,
      NgStyle
    ],
    templateUrl: './div.component.html',
    styleUrl: './div.component.css'
  })
  export class DivComponent implements OnInit {
    @Input() ngClass: any;
    @Input() style: any;

    ngOnInit() {
      // Convert string style attribute to object if needed
      if (typeof this.style === 'string') {
        const styleObj: {[key: string]: string} = {};
        const styles = this.style.split(';');

        styles.forEach(style => {
          const [property, value] = style.split(':').map(s => s.trim());
          if (property && value) {
            // Convert kebab-case to camelCase for style properties
            const camelProperty = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            styleObj[camelProperty] = value;
          }
        });

        this.style = styleObj;
      }
    }
  }
