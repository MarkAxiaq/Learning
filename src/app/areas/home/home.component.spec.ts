import { combineReducers } from 'redux';
import { NgZone } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IRunner } from '../../models/i-runner';
import { Observable } from 'rxjs/Rx';
import { NgReduxModule } from 'ng2-redux/lib/ng-redux.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import 'rxjs/add/observable/of';

import { HomeComponent } from './home.component';
import { HomeRunnersComponent } from './home-runners/home-runners.component';
import { StateActions } from '../../store/state-actions';
import { RunnersService } from '../../services/runners.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let newRunners$ = null;

  let defaultReducer = (state, action) => state;

  let provideRedux = (state, reducer = defaultReducer) => {
    let store = new NgRedux(new NgZone({}));
    store.configureStore(reducer, state);
    return store;
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent, HomeRunnersComponent],
        imports: [ReactiveFormsModule, FormsModule, NgReduxModule],
        providers: [
          FormBuilder,
          StateActions,
          RunnersService,
          HttpClient,
          HttpHandler
        ]
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(HomeComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
          // newRunners$ = TestBed.get(newRunners$);
        });
    })
  );

  it('should be created', () => {
    let test = new IRunner(1, 'egw', 5);
    //provideRedux({ newRunners: [test] });

    console.log(component.newRunners$);

    expect(component).toBeTruthy();
  });
});
