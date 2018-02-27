import {
  createStore,
  applyMiddleware,
  compose,
  GenericStoreEnhancer
} from 'redux';
import { reducer } from './reducer';
import { IRunnerState } from './i-runner-state';
import makeObjImmutable from './make-obj-immutable';

declare var window: any;
const devToolsExtension: GenericStoreEnhancer = window.devToolsExtension
  ? window.devToolsExtension()
  : f => f;

export const store = createStore<IRunnerState>(reducer, compose(
  applyMiddleware(makeObjImmutable),
  devToolsExtension
) as GenericStoreEnhancer);
