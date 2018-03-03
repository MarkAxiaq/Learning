import { IRunnerState } from './i-runner-state';
import { ADD_RUNNER, SEARCH_RUNNER, STORE_RUNNERS } from './state-actions';

const runners = [];

const initialState: IRunnerState = {
  runners,
  newRunners: runners
};

function storeRunners(state, action): IRunnerState {
  return Object.assign({}, state, {
    runners: action.runners,
    newRunners: action.runners
  });
}

function addRunner(state, action): IRunnerState {
  return Object.assign({}, state, {
    runners: state.runners.concat(action.runner),
    newRunners: state.runners.concat(action.runner)
  });
}

function searchRunner(state, action): IRunnerState {
  return Object.assign({}, state, {
    newRunners: state.runners.filter(
      r => r.name.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1
    )
  });
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_RUNNERS:
      return storeRunners(state, action);
    case ADD_RUNNER:
      return addRunner(state, action);
    case SEARCH_RUNNER:
      return searchRunner(state, action);
    default:
      return state;
  }
}
