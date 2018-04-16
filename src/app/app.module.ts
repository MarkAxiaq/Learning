import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AREAS_COMPONENTS } from './areas/index';
import { AppRoutingModule } from './app-routing.module';
import { IRunnerState } from './store';
import { StateActions } from './store/state-actions';
import { InMemoryRunnersService } from './services/in-memory-runners.service';
import { RunnersService } from './services/runners.service';
import { reducer, initialState } from './store/reducer';

@NgModule({
  declarations: [AppComponent, AREAS_COMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryRunnersService, {
      dataEncapsulation: false
    })
  ],
  providers: [StateActions, RunnersService],
  bootstrap: [AppComponent],
  exports: [AREAS_COMPONENTS]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IRunnerState>) {
    ngRedux.configureStore(reducer, initialState);
  }
}
