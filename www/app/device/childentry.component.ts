/**
 * Created by wkss on 6/16/17.
 */
import {Component, Input} from '@angular/core';
import {TimeEntry} from "./TimeEntry";


@Component({
    selector: 'hero-child',
    template: `
        <div> test {{timeEntry.name}}</div>
    `
})

export class TimeEntryComponent {
    @Input() timeEntry: TimeEntry;
}

