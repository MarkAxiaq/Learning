import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IRunner } from '../models/i-runner';

@Injectable()
export class RunnersService {
  private runnersUrl = 'api/runners';

  constructor(private http: HttpClient) {}

  getRunners(): Observable<IRunner[]> {
    return this.http.get<IRunner[]>(this.runnersUrl);
  }
}
