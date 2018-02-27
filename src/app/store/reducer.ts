import { IRunnerState } from './i-runner-state';
import { ADD_RUNNER, SEARCH_RUNNER } from './state-actions';

// To refactor and get data from API
const runners = [
  { id: 1, name: 'Mark Herrera', age: 35 },
  { id: 2, name: 'Matthew Scicluna', age: 30 },
  { id: 3, name: 'Mark Axiaq', age: 27 },
  { id: 4, name: 'James Anastasi', age: 32 }
];

const initialState: IRunnerState = {
  runners,
  newRunners: runners
};

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
    case ADD_RUNNER:
      return addRunner(state, action);
    case SEARCH_RUNNER:
      return searchRunner(state, action);
    default:
      return state;
  }
}
