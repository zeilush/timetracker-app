import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {Marker} from "./marker";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'google-maps',
  styleUrls: ['./googleMaps.scss'],
  templateUrl: './googleMaps.html',
})
export class GoogleMaps implements OnInit {
  title: string = 'select location';
  marker: Marker;

  constructor(private http: Http, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data
      .subscribe(data => {
        this.marker = data.marker;
      });
  }

  //event: MouseEvent
  markerDragEnd(marker: Marker, event: any) {
    this.marker.longitude = event.coords.lng
    this.marker.latitude = event.coords.lat

    console.log("creating marker", marker);

    this.http.post("http://192.168.56.101:8080/marker", marker)
      .map(res => res.json())
      .subscribe(createdMarker => {
        console.log("created marker {}", createdMarker);
      })
  }
}
