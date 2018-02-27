import { Event, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AREAS_ROUTES } from '../index';
import { StateActions } from '../../store/state-actions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public routes: Routes = [];

  constructor(private stateActions: StateActions) {}

  ngOnInit() {
    AREAS_ROUTES.forEach(route => {
      if (route.data) {
        this.routes.push(route);
      }
    });
  }

  searchRunner(event) {
    this.stateActions.searchRunner(event.target.value);
  }
}
