/**
 * Created by zeilush on 6/25/17.
 */
import * as GoogleMapsLoader from 'google-maps';
import {Http} from "@angular/http";
import {Marker} from "./marker";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MarkerService {
  constructor(private http: Http) {
  }

  getCurrentLocationMarker(): Observable<Marker> {
    return this.http.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyC8rsyqt4BMNw1KmS9E0CdegqdwFYZvEqQ", null, null)
      .map(res => {
        var result = res.json();
        return new Marker(result.location.lat, result.location.lng, "1", "primary location")
      });
  }
}
