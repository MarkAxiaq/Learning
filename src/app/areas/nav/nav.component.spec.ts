import { HttpClient, HttpHandler } from '@angular/common/http';
import { NgReduxModule } from 'ng2-redux/lib/ng-redux.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavComponent } from './nav.component';
import { StateActions } from '../../store/state-actions';
import { RunnersService } from '../../services/runners.service';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [NavComponent],
        imports: [RouterTestingModule, NgReduxModule],
        providers: [StateActions, RunnersService, HttpClient, HttpHandler]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
