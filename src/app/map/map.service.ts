import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ForceDirectedGraphResponse } from '../responses/ForceDirectedGraphResponse';
import 'rxjs/Rx';

import { URL } from '../URL';

@Injectable()
export class MapService {
  private readonly forceDirectedGraphEndpoint: string = URL.api + "/map/data";

  constructor(private http: Http) {}
  public GetActivePlanets(): Promise <ForceDirectedGraphResponse> {
    return this
      .http
      .get(this.forceDirectedGraphEndpoint)
      .map(value => {
        var response = value.json() as ForceDirectedGraphResponse;
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
