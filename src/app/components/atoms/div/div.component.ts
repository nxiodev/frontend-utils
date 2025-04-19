import {Component, Input, OnInit, HostBinding} from '@angular/core';
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

      // Add this to capture the class attribute
      @HostBinding('class')
      @Input()
      class: string = '';

      ngOnInit() {
        if (typeof this.style === 'string') {
          const styleObj: {[key: string]: string} = {};
          const styles = this.style.split(';');

          styles.forEach(style => {
            const [property, value] = style.split(':').map(s => s.trim());
            if (property && value) {
              const camelProperty = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
              styleObj[camelProperty] = value;
            }
          });

          this.style = styleObj;
        }
      }
    }
