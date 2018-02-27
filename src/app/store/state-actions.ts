import { NgRedux } from 'ng2-redux';
import { Injectable } from '@angular/core';

import { IRunnerState } from './i-runner-state';
import { IRunner } from '../models/i-runner';

export const ADD_RUNNER = 'runners/ADD';
export const SEARCH_RUNNER = 'runners/SEARCH';

@Injectable()
export class StateActions {
  constructor(private ngRedux: NgRedux<IRunnerState>) {}

  addRunner(runner: IRunner) {
    this.ngRedux.dispatch({
      type: ADD_RUNNER,
      runner
    });
  }

  searchRunner(searchText: string) {
    this.ngRedux.dispatch({
      type: SEARCH_RUNNER,
      searchText
    });
  }
}
