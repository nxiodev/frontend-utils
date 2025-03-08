import { Routes } from '@angular/router';
import { GalleryComponent} from './pages/gallery/gallery/gallery.component';
import { HomeComponent} from './pages/home/home.component';

import {DescriptionsComponent} from './pages/descriptions/descriptions/descriptions.component';
import {DescriptionsButtonComponent} from './pages/descriptions/descriptions-button/descriptions-button.component';
import { DescriptionsBadgeComponent } from './pages/descriptions/descriptions-badge/descriptions-badge.component';
import {DescriptionsCardComponent} from './pages/descriptions/descriptions-card/descriptions-card.component';
import { DescriptionsInputComponent } from './pages/descriptions/descriptions-input/descriptions-input.component';
import { DescriptionsGridComponent } from './pages/descriptions/descriptions-grid/descriptions-grid.component';
import {DescriptionsCheckboxComponent  } from './pages/descriptions/descriptions-checkbox/descriptions-checkbox.component';
import { DescriptionsProgressSpinnerComponent} from './pages/descriptions/descriptions-progress-spinner/descriptions-progress-spinner.component';
import { DescriptionsIconComponent } from './pages/descriptions/descriptions-icon/descriptions-icon.component';
import {DescriptionsChipsComponent } from './pages/descriptions/descriptions-chips/descriptions-chips.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'descriptions', component: DescriptionsComponent },
  { path: 'descriptions/button', component: DescriptionsButtonComponent },
  { path: 'descriptions/badge', component: DescriptionsBadgeComponent },
  { path: 'descriptions/card', component:  DescriptionsCardComponent},
  { path: 'descriptions/input', component: DescriptionsInputComponent },
  { path: 'descriptions/grid', component: DescriptionsGridComponent },
  { path: 'descriptions/checkbox', component: DescriptionsCheckboxComponent },
  { path: 'descriptions/progressspinner', component: DescriptionsProgressSpinnerComponent },
  { path: 'descriptions/icon', component: DescriptionsIconComponent },
  { path: 'descriptions/chips', component: DescriptionsChipsComponent },
];
