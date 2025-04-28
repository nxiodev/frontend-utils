import {Component, Input} from '@angular/core';
import {CardComponent} from "../../../components/molecules/card/card.component";
import {NgForOf} from "@angular/common";
import {SecondheaderComponent} from "../../../components/organisms/secondheader/secondheader.component";
import {SidenavComponent} from "../../../components/organisms/sidenav/sidenav.component";
import {TableComponent} from '../../../components/organisms/table/table.component';
import {AtomsStats} from '../../../models/atoms-stats.model';

@Component({
  selector: 'app-user-crud',
  imports: [
    CardComponent,
    NgForOf,
    SecondheaderComponent,
    SidenavComponent,
    TableComponent
  ],
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.css'
})
export class UserCrudComponent {
  @Input() links = [
    { url: '/descriptions?button', name: '', icon: 'fa-solid fa-bars' },
    { url: '/descriptions?badge', name: '', icon: 'fa-solid fa-plus' },
    { url: '/descriptions?input', name: 'profile', icon: 'fa-solid fa-user' },
    { url: '/descriptions?icon', name: 'home', icon: 'fa-solid fa-house' },
    { url: '/descriptions?card', name: 'explore', icon: 'fa-solid fa-compass' },
    { url: '/descriptions?progressspinner', name: 'contac us', icon: 'fa-solid fa-inbox' },
  ];
  @Input() dataSource: AtomsStats[] = [
    {
      name: 'Donovan',
      description: 'donovanivanq@gmail.com',
      default: 'active'
    },
    {
      name: 'Maria Garcia',
      description: 'maria.garcia@example.com',
      default: 'active'
    },
    {
      name: 'James Wilson',
      description: 'jwilson85@example.com',
      default: 'inactive'
    },
    {
      name: 'Sarah Chen',
      description: 'sarah.chen@example.com',
      default: 'active'
    },
    {
      name: 'Robert Johnson',
      description: 'rjohnson@example.net',
      default: 'active'
    },
    {
      name: 'Emily Davis',
      description: 'edavis22@example.org',
      default: 'inactive'
    },
    {
      name: 'Michael Brown',
      description: 'mbrown@example.com',
      default: 'active'
    },
    {
      name: 'Sofia Martinez',
      description: 'smartinez@example.net',
      default: 'inactive'
    },
    {
      name: 'David Kim',
      description: 'dkim123@example.com',
      default: 'active'
    },
    {
      name: 'Jessica Taylor',
      description: 'jtaylor@example.org',
      default: 'inactive'
    },
    {
      name: 'Alex Robinson',
      description: 'arobinson@example.com',
      default: 'active'
    }
  ];
}
