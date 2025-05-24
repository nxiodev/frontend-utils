import { Component, Input } from '@angular/core';
import {MatChipSet} from "@angular/material/chips";
import {ChipsMolecule} from '../../molecules/chips/chips.component';

@Component({
  selector: 'app-chips-set',
    imports: [
        MatChipSet, ChipsMolecule
    ],
  templateUrl: './chips-set.component.html',
  styleUrl: './chips-set.component.css'
})
export class ChipsSetOrganism {
  @Input() chips!: { imageSrc: string; imageAlt: string; chipLabel: string }[];
}

/*Example of use in a parent component:
* <app-chips-set
  [chips]="[
    { imageSrc: 'https://material.angular.io/assets/img/examples/shiba1.jpg', imageAlt: 'Photo of a Shiba Inu', chipLabel: 'Dog one' },
    { imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg', imageAlt: 'Photo of another Shiba Inu', chipLabel: 'Dog two' }
  ]"
></app-chips-set>
* */
