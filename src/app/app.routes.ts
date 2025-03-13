import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import { NgModule } from '@angular/core';

import {DescriptionsComponent} from './pages/descriptions/descriptions/descriptions.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'descriptions', component: DescriptionsComponent },
];


