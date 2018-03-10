import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeRunnersComponent } from './home-runners.component';
import { HomeComponent } from '../home.component';
import { IRunner } from '../../../models/i-runner';

describe('HomeRunnersComponent', () => {
  let component: HomeRunnersComponent;
  let fixture: ComponentFixture<HomeRunnersComponent>;
  let runner: IRunner = new IRunner(1, 'Mark', 2);

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HomeRunnersComponent, HomeComponent],
        providers: [FormBuilder],
        imports: [ReactiveFormsModule, FormsModule]
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(HomeRunnersComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
        });
    })
  );

  it('should be created', () => {
    component.runner = new IRunner(1, 'Mark', 2);
    expect(component).toBeTruthy();
  });
});
