import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeRunnersComponent } from './home-runners.component';
import { IRunner } from '../../../models/i-runner';

describe('HomeRunnersComponent', () => {
  let component: HomeRunnersComponent;
  let fixture: ComponentFixture<HomeRunnersComponent>;
  const runnerMock: IRunner = {
    id: 5,
    name: 'Samantha Camilleri',
    age: 25
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HomeRunnersComponent],
        providers: [FormBuilder],
        imports: [ReactiveFormsModule, FormsModule]
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(HomeRunnersComponent);
          component = fixture.componentInstance;
          component.runner = runnerMock;
          fixture.detectChanges();
        });
    })
  );

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
