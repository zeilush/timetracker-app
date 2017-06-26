"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var maps_component_1 = require("./maps.component");
var googleMaps_component_1 = require("./components/googleMaps/googleMaps.component");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: maps_component_1.Maps,
        children: [
            { path: 'googlemaps', component: googleMaps_component_1.GoogleMaps }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
