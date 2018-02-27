import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRunnersComponent } from './home-runners.component';
import { IRunner } from '../../../models/i-runner';

describe('HomeRunnersComponent', () => {
  let component: HomeRunnersComponent;
  let fixture: ComponentFixture<HomeRunnersComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HomeRunnersComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRunnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
