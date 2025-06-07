import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { DescriptionsComponent } from './pages/descriptions/descriptions/descriptions.component';
import { LoginComponent} from './pages/login/login/login.component';
import { MainhomePage} from './pages/mainhome/mainhome/mainhome.component';
import {UserCrudComponent} from './pages/UserCrud/user-crud/user-crud.component';

export const routes: Routes = [
  {path: '', component: MainhomePage},
  { path: 'galery', component: HomeComponent },
  { path: 'descriptions/:type', component: DescriptionsComponent },
  { path: 'login', component: LoginComponent },
  {path: 'crud', component: UserCrudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
