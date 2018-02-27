import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AREAS_COMPONENTS } from './areas/index';
import { AppRoutingModule } from './app-routing.module';
import { store, IRunnerState } from './store';
import { StateActions } from './store/state-actions';

@NgModule({
  declarations: [AppComponent, AREAS_COMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StateActions],
  bootstrap: [AppComponent],
  exports: [AREAS_COMPONENTS]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IRunnerState>) {
    ngRedux.provideStore(store);
  }
}
