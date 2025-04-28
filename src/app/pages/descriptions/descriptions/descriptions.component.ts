import { Component, Input, OnInit } from '@angular/core';
      import { ActivatedRoute } from '@angular/router';
      import { CommonModule } from '@angular/common';
      import { AtomsStats } from '../../../models/atoms-stats.model';
      import { TemplateComponent } from '../../../components/templates/template/template.component';


      @Component({
        selector: 'app-descriptions',
        imports: [
          CommonModule,
          TemplateComponent,
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
          links: { url: string, name: string, icon: string}[],
          breads: { url: string, name: string }[],
          title: string,
          titlePrimario: string,
        }[] = [
          { // start of Boton
            dataSource: [
              { name: 'Propiedad', default: 'Aceptar', description: 'El boton cuenta con la propiedad de ser un iniciador de eventos, al darle' +
                  ' click se puede empezar una acción predeterminada' },
              { name: 'Uso', default: 'Iniciar sesión', description: 'Se puede usar el botón como trigger para el inicio de sesión de' +
                  'una aplicación que necesite verificación de identidad ' },
            ],
            image: 'https://material.angular.io/assets/screenshots/button.scene.png',
            description: 'An interactive button with a range of presentation options.',
            titlePrimario: 'Botón',
            titleTexts: 'El botón es un componente interactivo con una variedad de opciones de presentación.',
            topText: 'Boton: se puede usar para iniciar una acción predeterminada',
            titleTable1: 'Propiedades',
            title2: 'Ejemplo de uso',
            subtitle2: 'Botón de inicio de sesión',
            imageUrl2: 'https://material.angular.io/assets/screenshots/button.scene.png',
            titleTexts2: 'Ejemplo',
            links: [
              { url: '/descriptions/button', name: 'Button', icon:''},
              { url: '/descriptions/badge', name: 'Badge', icon:'' },
              { url: '/descriptions/card', name: 'Card', icon:'' },
              { url: '/descriptions/checkbox', name: 'Checkbox', icon:'' },
              { url: '/descriptions/grid', name: 'Grid', icon:'' },
              { url: '/descriptions/progress spinner', name: 'Progress Spinner', icon:'' },
              { url: '/descriptions/icon', name: 'Icon', icon:'' },
            ],
            breads: [
              { url: '/', name: 'Home' },
              { url: '/descriptions', name: 'Descriptions' },
              { url: '/descriptions/button', name: 'button' },
            ],
            title: 'Button',
          }, //end of button
          { // start of Card
            dataSource: [
              {
                name: 'Propiedad',
                default: 'Contenedor de contenido',
                description: 'La card es un contenedor flexible que agrupa información relacionada, como texto, imágenes o botones.'
              },
              {
                name: 'Uso',
                default: 'Presentar información agrupada',
                description: 'Se utiliza para mostrar contenido relacionado, como perfiles de usuario, productos o descripciones breves.'
              },
            ],
            image: 'https://material.angular.io/assets/screenshots/card.scene.png',
            description: 'A flexible and extensible content container with multiple display options.',
            titlePrimario: 'Card',
            titleTexts: 'La card es un contenedor versátil que agrupa contenido relacionado con opciones de presentación flexibles.',
            topText: 'Card: contenedor adaptable para agrupar información visual y textual.',
            titleTable1: 'Propiedades',
            title2: 'Ejemplo de uso',
            subtitle2: 'Card de perfil de usuario',
            imageUrl2: 'https://material.angular.io/assets/screenshots/card.scene.png',
            titleTexts2: 'Ejemplo',
            links: [
              { url: '/descriptions/button', name: 'Button', icon:''},
              { url: '/descriptions/badge', name: 'Badge', icon:'' },
              { url: '/descriptions/card', name: 'Card', icon:'' },
              { url: '/descriptions/checkbox', name: 'Checkbox', icon:'' },
              { url: '/descriptions/grid', name: 'Grid', icon:'' },
              { url: '/descriptions/progress spinner', name: 'Progress Spinner', icon:'' },
              { url: '/descriptions/icon', name: 'Icon', icon:'' },
            ],
            breads: [
              { url: '/', name: 'Home' },
              { url: '/descriptions', name: 'Descriptions' },
              { url: '/descriptions/card', name: 'Card' },
            ],
            title: 'Card',
          }, // end of Card

          { // start of Icon
            dataSource: [
              {
                name: 'Propiedad',
                default: 'Representación gráfica',
                description: 'El icono es un elemento visual que representa una acción, concepto o estado mediante un símbolo gráfico.'
              },
              {
                name: 'Uso',
                default: 'Indicador visual',
                description: 'Se utiliza para mejorar la comprensión visual, como en botones, menús o indicadores de estado.'
              },
            ],
            image: 'https://material.angular.io/assets/screenshots/icon.scene.png',
            description: 'A symbolic representation of a concept or action, enhancing the visual experience.',
            titlePrimario: 'Icon',
            titleTexts: 'El icono es un elemento gráfico que representa visualmente acciones o conceptos.',
            topText: 'Icon: elemento gráfico para representar visualmente acciones o estados.',
            titleTable1: 'Propiedades',
            title2: 'Ejemplo de uso',
            subtitle2: 'Icono de búsqueda',
            imageUrl2: 'https://material.angular.io/assets/screenshots/icon.scene.png',
            titleTexts2: 'Ejemplo',
            links: [
              { url: '/descriptions/button', name: 'Button', icon:''},
              { url: '/descriptions/badge', name: 'Badge', icon:'' },
              { url: '/descriptions/card', name: 'Card', icon:'' },
              { url: '/descriptions/checkbox', name: 'Checkbox', icon:'' },
              { url: '/descriptions/grid', name: 'Grid', icon:'' },
              { url: '/descriptions/progress spinner', name: 'Progress Spinner', icon:'' },
              { url: '/descriptions/icon', name: 'Icon', icon:'' },
            ],
            breads: [
              { url: '/', name: 'Home' },
              { url: '/descriptions', name: 'Descriptions' },
              { url: '/descriptions/icon', name: 'Icon' },
            ],
            title: 'Icon',
          }, // end of Icon
          { // start of Progress Spinner
            dataSource: [
              {
                name: 'Propiedad',
                default: 'Indicador de carga',
                description: 'El progress spinner es un elemento visual que muestra el progreso de una acción en curso mediante un círculo giratorio.'
              },
              {
                name: 'Uso',
                default: 'Indicador de proceso',
                description: 'Se utiliza para mostrar que una operación está en progreso, como la carga de datos o la espera de una respuesta.'
              },
            ],
            image: 'https://material.angular.io/assets/screenshots/progress-spinner.scene.png',
            description: 'A circular indicator representing the progress of a process or loading state.',
            titlePrimario: 'Progress Spinner',
            titleTexts: 'El progress spinner es un componente visual que muestra el estado de carga o progreso de una acción.',
            topText: 'Progress Spinner: indicador gráfico para mostrar el progreso de una acción en curso.',
            titleTable1: 'Propiedades',
            title2: 'Ejemplo de uso',
            subtitle2: 'Spinner de carga',
            imageUrl2: 'https://material.angular.io/assets/screenshots/progress-spinner.scene.png',
            titleTexts2: 'Ejemplo',
            links: [
              { url: '/descriptions/button', name: 'Button', icon:''},
              { url: '/descriptions/badge', name: 'Badge', icon:'' },
              { url: '/descriptions/card', name: 'Card', icon:'' },
              { url: '/descriptions/checkbox', name: 'Checkbox', icon:'' },
              { url: '/descriptions/grid', name: 'Grid', icon:'' },
              { url: '/descriptions/progress spinner', name: 'Progress Spinner', icon:'' },
              { url: '/descriptions/icon', name: 'Icon', icon:'' },
            ],
            breads: [
              { url: '/', name: 'Home' },
              { url: '/descriptions', name: 'Descriptions' },
              { url: '/descriptions/progress-spinner', name: 'Progress Spinner' },
            ],
            title: 'Progress Spinner',
          }, // end of Progress Spinner
          { // start of Grid
            dataSource: [
              {
                name: 'Propiedad',
                default: 'Diseño de cuadrícula',
                description: 'El grid es un sistema de diseño basado en filas y columnas que organiza elementos de forma estructurada y alineada.'
              },
              {
                name: 'Uso',
                default: 'Organizar contenido',
                description: 'Se utiliza para distribuir contenido en un diseño uniforme, facilitando la alineación y disposición visual.'
              },
            ],
            image: 'https://material.angular.io/assets/screenshots/grid-list.scene.png',
            description: 'A flexible grid layout to structure content using rows and columns.',
            titlePrimario: 'Grid',
            titleTexts: 'El grid es un sistema de diseño que organiza elementos en filas y columnas para una disposición estructurada.',
            topText: 'Grid: sistema visual para organizar contenido en un diseño estructurado.',
            titleTable1: 'Propiedades',
            title2: 'Ejemplo de uso',
            subtitle2: 'Grid con imágenes',
            imageUrl2: 'https://material.angular.io/assets/screenshots/grid-list.scene.png',
            titleTexts2: 'Ejemplo',
            links: [
              { url: '/descriptions/button', name: 'Button', icon:''},
              { url: '/descriptions/badge', name: 'Badge', icon:'' },
              { url: '/descriptions/card', name: 'Card', icon:'' },
              { url: '/descriptions/checkbox', name: 'Checkbox', icon:'' },
              { url: '/descriptions/grid', name: 'Grid', icon:'' },
              { url: '/descriptions/progress spinner', name: 'Progress Spinner', icon:'' },
              { url: '/descriptions/icon', name: 'Icon', icon:'' },
            ],
            breads: [
              { url: '/', name: 'Home' },
              { url: '/descriptions', name: 'Descriptions' },
              { url: '/descriptions/grid', name: 'Grid' },
            ],
            title: 'Grid',
          }, // end of Grid

          { // start of Checkbox
            dataSource: [
              {
                name: 'Propiedad',
                default: 'Selección binaria',
                description: 'El checkbox es un elemento de control que permite seleccionar o deseleccionar una opción, representando un valor booleano.'
              },
              {
                name: 'Uso',
                default: 'Opciones múltiples',
                description: 'Se utiliza para habilitar o deshabilitar configuraciones, o para seleccionar varias opciones de un conjunto.'
              },
            ],
            image: 'https://material.angular.io/assets/screenshots/checkbox.scene.png',
            description: 'A checkbox component that allows users to select or deselect options.',
            titlePrimario: 'Checkbox',
            titleTexts: 'El checkbox es un componente interactivo que permite seleccionar o deseleccionar opciones.',
            topText: 'Checkbox: elemento de selección binaria para elegir múltiples opciones.',
            titleTable1: 'Propiedades',
            title2: 'Ejemplo de uso',
            subtitle2: 'Checkbox múltiple',
            imageUrl2: 'https://material.angular.io/assets/screenshots/checkbox.scene.png',
            titleTexts2: 'Ejemplo',
            links: [
              { url: '/descriptions/button', name: 'Button', icon:''},
              { url: '/descriptions/badge', name: 'Badge', icon:'' },
              { url: '/descriptions/card', name: 'Card', icon:'' },
              { url: '/descriptions/checkbox', name: 'Checkbox', icon:'' },
              { url: '/descriptions/grid', name: 'Grid', icon:'' },
              { url: '/descriptions/progress spinner', name: 'Progress Spinner', icon:'' },
              { url: '/descriptions/icon', name: 'Icon', icon:'' },
            ],
            breads: [
              { url: '/', name: 'Home' },
              { url: '/descriptions', name: 'Descriptions' },
              { url: '/descriptions/checkbox', name: 'Checkbox' },
            ],
            title: 'Checkbox',
          }, // end of Checkbox
          { // start of Badge
            dataSource: [
              {
                name: 'Propiedad',
                default: 'Etiqueta visual',
                description: 'El badge es un componente que muestra un pequeño indicador visual, como un contador o notificación, asociado a otro elemento.'
              },
              {
                name: 'Uso',
                default: 'Contador de notificaciones',
                description: 'Se utiliza para mostrar la cantidad de elementos pendientes, como mensajes, alertas o notificaciones.'
              },
            ],
            image: 'https://material.angular.io/assets/screenshots/badge.scene.png',
            description: 'A small visual indicator used to represent status or count.',
            titlePrimario: 'Badge',
            titleTexts: 'El badge es un componente visual que muestra un contador o indicador asociado a otro elemento.',
            topText: 'Badge: indicador visual para mostrar el estado o la cantidad de notificaciones.',
            titleTable1: 'Propiedades',
            title2: 'Ejemplo de uso',
            subtitle2: 'Badge con contador',
            imageUrl2: 'https://material.angular.io/assets/screenshots/badge.scene.png',
            titleTexts2: 'Ejemplo',
            links: [
              { url: '/descriptions/button', name: 'Button', icon:''},
              { url: '/descriptions/badge', name: 'Badge', icon:'' },
              { url: '/descriptions/card', name: 'Card', icon:'' },
              { url: '/descriptions/checkbox', name: 'Checkbox', icon:'' },
              { url: '/descriptions/grid', name: 'Grid', icon:'' },
              { url: '/descriptions/progress spinner', name: 'Progress Spinner', icon:'' },
              { url: '/descriptions/icon', name: 'Icon', icon:'' },
            ],
            breads: [
              { url: '/', name: 'Home' },
              { url: '/descriptions', name: 'Descriptions' },
              { url: '/descriptions/badge', name: 'Badge' },
            ],
            title: 'Badge',
          }, // end of Badge

        ];

        type: string | null = null;
        // EstiloNuevo: string = 'width: 50px;\n' +
        //   '  height: 50px;\n' +
        //   '  border-radius: 50%;\n' +
        //   '  background-color: rgb(20, 20, 20);\n' +
        //   '  border: none;\n' +
        //   '  font-weight: 600;\n' +
        //   '  display: flex;\n' +
        //   '  align-items: center;\n' +
        //   '  justify-content: center;\n' +
        //   '  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);\n' +
        //   '  cursor: pointer;\n' +
        //   '  transition-duration: .3s;\n' +
        //   '  overflow: hidden;\n' +
        //   '  position: relative;';

        constructor(private route: ActivatedRoute) {}

        ngOnInit(): void {
          this.route.paramMap.subscribe(params => {
            this.type = params.get('type');
            // You can now use this.type to filter or fetch data based on the type parameter
          });
        }
      }
