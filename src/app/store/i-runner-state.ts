import { IRunner } from '../models/i-runner';

export interface IRunnerState {
  runners: IRunner[];
  newRunners: IRunner[];
}
