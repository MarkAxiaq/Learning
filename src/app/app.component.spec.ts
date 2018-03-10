import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux } from 'ng2-redux';

import { AppComponent } from './app.component';
import { AREAS_COMPONENTS } from './areas/index';
import { StateActions } from './store/state-actions';
import { IRunnerState } from './store/i-runner-state';
import { RunnersService } from './services/runners.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, AREAS_COMPONENTS],
        imports: [
          RouterTestingModule,
          ReactiveFormsModule,
          FormsModule,
          NgReduxModule
        ],
        providers: [
          FormBuilder,
          StateActions,
          RunnersService,
          HttpClient,
          HttpHandler
        ]
      }).compileComponents();
    })
  );

  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
