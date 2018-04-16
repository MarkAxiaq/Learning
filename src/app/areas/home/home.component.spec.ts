import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import 'rxjs/add/observable/of';
import { NgReduxTestingModule } from '@angular-redux/store/testing';

import { HomeComponent } from './home.component';
import { HomeRunnersComponent } from './home-runners/home-runners.component';
import { StateActions } from '../../store/state-actions';
import { RunnersService } from '../../services/runners.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const stateActionsMock = jasmine.createSpyObj('StateActions', ['getRunners']);

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent, HomeRunnersComponent],
        imports: [ReactiveFormsModule, FormsModule, NgReduxTestingModule],
        providers: [
          FormBuilder,
          {
            provide: StateActions,
            useValue: stateActionsMock
          },
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
        });
    })
  );

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
