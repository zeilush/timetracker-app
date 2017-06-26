import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {Marker} from "./marker";
import {ActivatedRoute} from "@angular/router";

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
    this.marker.lng = event.coords.lng
    this.marker.lat = event.coords.lat
    console.log(this.marker);
  }
}
