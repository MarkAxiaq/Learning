import { NgRedux } from 'ng2-redux';
import { Injectable } from '@angular/core';

import { IRunnerState } from './i-runner-state';
import { IRunner } from '../models/i-runner';
import { RunnersService } from 'app/services/runners.service';

export const ADD_RUNNER = 'runners/ADD';
export const SEARCH_RUNNER = 'runners/SEARCH';
export const STORE_RUNNERS = 'runners/GET';

@Injectable()
export class StateActions {
  constructor(
    private ngRedux: NgRedux<IRunnerState>,
    private runnerService: RunnersService
  ) {}

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

  getRunners() {
    this.runnerService.getRunners().subscribe(runners => {
      this.ngRedux.dispatch({
        type: STORE_RUNNERS,
        runners
      });
    });
  }
}
