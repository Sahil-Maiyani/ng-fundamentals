import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/events.model';
import { EventService } from '../shared/events.service';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
       .event-image {height: 100px;}
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent
    constructor(private eventService: EventService, private route:ActivatedRoute) {

    }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }
}