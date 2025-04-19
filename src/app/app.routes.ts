import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { DescriptionsComponent } from './pages/descriptions/descriptions/descriptions.component';
import { LoginComponent} from './pages/login/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'descriptions/:type', component: DescriptionsComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
