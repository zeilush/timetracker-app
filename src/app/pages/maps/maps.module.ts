import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import {MapsRoutingModule}       from './maps.routing';
import { Maps } from './maps.component';
import { GoogleMaps } from './components/googleMaps/googleMaps.component';

import { AgmCoreModule } from '@agm/core';
import {MarkerResolver} from "./components/googleMaps/marker-resolver.service";
import {MarkerService} from "./components/googleMaps/marker.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    MapsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC8rsyqt4BMNw1KmS9E0CdegqdwFYZvEqQ'
    })
  ],
  providers: [
    MarkerService
  ],
  declarations: [
    Maps,
    GoogleMaps
  ]
})
export class MapsModule {}
