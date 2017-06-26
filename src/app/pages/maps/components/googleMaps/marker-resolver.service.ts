/**
 * Created by zeilush on 6/25/17.
 */
import {Injectable}             from '@angular/core';
import {Resolve} from '@angular/router';

import {MarkerService} from './marker.service';
import {Marker} from "./marker";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MarkerResolver implements Resolve<Marker> {

  constructor(private ms: MarkerService) {
  }

  resolve(): Observable<Marker> {
    return this.ms.getCurrentLocationMarker();
  }
}
