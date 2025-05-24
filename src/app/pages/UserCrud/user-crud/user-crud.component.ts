import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {UserModel} from '../../../models/atoms-stats.model';
import {TableOrganism} from '../../../components/organisms/table/table.component';
import {SecondHeaderOrganism} from '../../../components/organisms/secondheader/secondheader.component';
import {SidenavOrganism} from '../../../components/organisms/sidenav/sidenav.component';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.css',
  standalone: true,
  imports: [TableOrganism, SecondHeaderOrganism, SidenavOrganism]
})
export class UserCrudComponent implements OnInit {
  links: any[] = [];
  dataSource: UserModel[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getAllUsers()
      .then((users: any[]) => {
        this.dataSource = users.map((user: any) => ({
          name: user.name,
          username: user.username,
          email: user.email,
          is_active: user.is_active,
          is_superuser: user.is_superuser,
          is_staff: user.is_staff
        }));
      })
      .catch((error: any) => {
        console.error('Error fetching users:', error);
      });
  }
}
