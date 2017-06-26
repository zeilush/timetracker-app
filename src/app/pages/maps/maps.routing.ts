import {Routes, RouterModule}  from '@angular/router';

import {Maps} from './maps.component';
import {GoogleMaps} from './components/googleMaps/googleMaps.component';
import {NgModule} from "@angular/core";
import {MarkerResolver} from "./components/googleMaps/marker-resolver.service";
import {MarkerService} from "./components/googleMaps/marker.service";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Maps,

    children: [
      {path: 'googlemaps', component: GoogleMaps, resolve: {marker: MarkerResolver}}
    ]
  }
];

//export const routing = RouterModule.forChild(routes);


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MarkerResolver
  ]
})

export class MapsRoutingModule { }
