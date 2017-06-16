import { Component } from '@angular/core';
import { Inject, Injectable } from '@angular/core';

@Component({
    template:'<h5>Cordova App {{title}}</h5>'
})
export class AboutComponent {

    title = "abc"
}

