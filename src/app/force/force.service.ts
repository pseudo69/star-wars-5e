import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DisciplineResponse } from './DisciplineResponse';
import 'rxjs/Rx';

import { URL } from '../Constants';

@Injectable()
export class ForceService {
  private readonly disciplineEndpoint: string = URL.api + "/force/get-disciplines";

  constructor(private http: Http) {}
  public GetDisciplines(): Promise <DisciplineResponse> {
    return this
      .http
      .get(this.disciplineEndpoint)
      .map(value => {
        var response = value.json() as DisciplineResponse;
        if (!response) {
          throw value.toString();
        } else if (response.Error) {
          throw response.Error;
        }
        return response;
      })
      .toPromise();
  }
}
