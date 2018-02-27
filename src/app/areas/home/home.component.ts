import { Observable } from 'rxjs/Rx';
import { NgRedux, select } from 'ng2-redux';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { IRunner } from '../../models/i-runner';
import { IRunnerState } from '../../store/i-runner-state';
import { StateActions } from '../../store/state-actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public runnerForm: FormGroup;
  @select('newRunners') newRunners$: Observable<IRunner>;

  constructor(
    private ngRedux: NgRedux<IRunnerState>,
    private formBuilder: FormBuilder,
    private stateActions: StateActions
  ) {}

  ngOnInit() {
    this.createForm();
  }

  public onSubmit() {
    console.log(this.runnerForm.value);
    this.stateActions.addRunner(this.runnerForm.value);
  }

  public createForm() {
    this.runnerForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      age: [null, [Validators.required]]
    });
  }

  public searchRunner(event) {
    this.stateActions.searchRunner(event.target.value);
  }
}
