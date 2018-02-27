import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HomeRunnersComponent } from './home/home-runners/home-runners.component';

export const AREAS_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: NotFoundComponent }
];

export const AREAS_COMPONENTS = [
  HomeComponent,
  NavComponent,
  ErrorComponent,
  NotFoundComponent,
  FooterComponent,
  HomeRunnersComponent
];
