import {Component, Input} from '@angular/core';
import {UniversalIconAtom} from '../../atoms/universal-icon/universal-icon.component';
import {NgIf} from '@angular/common';
import { DataService} from '../../../services/data.service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-secondheader',
  imports: [
    UniversalIconAtom,
    NgIf,
    RouterLink
  ],
  templateUrl: './secondheader.component.html',
  styleUrl: './secondheader.component.css',
  standalone: true,
})
export class SecondHeaderOrganism {
  @Input() TitlePage: string = 'NXIODEV';

  isDropdownOpen = false;

  constructor(private dataService: DataService, private router: Router) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  async logout() {
    await this.dataService.logout();
    await this.router.navigate(['/login']);
  }


  protected readonly Router = Router;
}
