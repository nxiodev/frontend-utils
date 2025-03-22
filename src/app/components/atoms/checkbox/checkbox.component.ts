import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  templateUrl: 'checkbox.component.html',
  styleUrl: 'checkbox.component.css',
  imports: [MatCheckboxModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @Input() CheckText!: string;
}
