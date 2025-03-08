import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/atoms/button/button.component';
import { BadgeComponent } from '../../../components/atoms/badge/badge.component';
import { CardComponent } from '../../../components/molecules/card/card.component';
import { InputComponent } from '../../../components/atoms/input/input.component';
import { ChipsComponent } from '../../../components/atoms/chips/chips.component';
import { CheckboxComponent } from '../../../components/atoms/checkbox/checkbox.component';
import { IconComponent } from '../../../components/atoms/icon/icon.component';
import { ProgressSpinnerComponent } from '../../../components/atoms/progress-spinner/progress-spinner.component';
import {SidenavComponent} from '../../../components/atoms/sidenav/sidenav.component';
import { RouterModule} from '@angular/router';
import {TableComponent} from '../../../components/atoms/table/table.component';
import {AtomsStats} from '../../../models/atoms-stats.model';

@Component({
  selector: 'app-descriptions',
  imports: [
    ButtonComponent, BadgeComponent, CardComponent, InputComponent,
    ChipsComponent, CheckboxComponent, IconComponent,
    ProgressSpinnerComponent, SidenavComponent, RouterModule, TableComponent
  ],
  templateUrl: './descriptions.component.html',
  styleUrl: './descriptions.component.css'
})
export class DescriptionsComponent {

  tableData: AtomsStats[] = [
    {name: 'Donovan', default: 'Ivan Lopez', description: 'El mejor claro que si'},
  ];

}
