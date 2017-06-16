import { Component } from '@angular/core';
@Component({
    selector: 'app',
    template: `
    <a [routerLink]="['about']">About</a> | <a [routerLink]="['device']">Devicess</a> <br/>  
    <router-outlet></router-outlet>`
})

export class AppComponent {
    constructor() {
        document.addEventListener('deviceready', function () {
            console.log('device ready received');
        }, false)
    }
}