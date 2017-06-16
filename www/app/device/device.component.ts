import { Component } from '@angular/core';
import {TimeEntry} from "./TimeEntry";
@Component({
    templateUrl: "app/device/device.component.html"
})

export class DeviceComponent {
    timeEntry = new TimeEntry("qwert")

    private deviceDetails = "";
    populateDeviceDetails() {
        var device:Device = (<any>window).device;
        this.deviceDetails = "";
        this.deviceDetails += "<br/>Cordova:" + device.cordova;
        this.deviceDetails += "<br/>model:" + device.model;
        this.deviceDetails += "<br/>platform:" + device.platform;
        this.deviceDetails += "<br/>uuid:" + device.uuid;
        this.deviceDetails += "<br/>version:" + device.version;
        this.deviceDetails += "<br/>manufacturer:" + device.manufacturer;
        this.deviceDetails += "<br/>isVirtual:" + device.isVirtual;
        this.deviceDetails += "<br/>serial:" + device.serial;
    }
}