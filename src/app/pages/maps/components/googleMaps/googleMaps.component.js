"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GoogleMaps = (function () {
    function GoogleMaps() {
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        // constructor(private _elementRef:ElementRef) {
        // }
        //
        // ngAfterViewInit() {
        //   let el = this._elementRef.nativeElement.querySelector('.google-maps');
        //
        //   // TODO: do not load this each time as we already have the library after first attempt
        //   GoogleMapsLoader.load((google) => {
        //     new google.maps.Map(el, {
        //       center: new google.maps.LatLng(44.5405, -78.5463),
        //       zoom: 8,
        //       mapTypeId: google.maps.MapTypeId.ROADMAP
        //     });
        //   });
        // }
    }
    return GoogleMaps;
}());
GoogleMaps = __decorate([
    core_1.Component({
        selector: 'google-maps',
        styleUrls: ['./googleMaps.scss'],
        templateUrl: './googleMaps.html',
    })
], GoogleMaps);
exports.GoogleMaps = GoogleMaps;
