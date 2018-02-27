import { Component, Input, OnInit } from '@angular/core';

import { IRunner } from '../../../models/i-runner';

@Component({
  selector: 'app-home-runners',
  templateUrl: './home-runners.component.html',
  styleUrls: ['./home-runners.component.scss']
})
export class HomeRunnersComponent implements OnInit {
  @Input() runner: IRunner;

  constructor() {}

  ngOnInit() {}
}
