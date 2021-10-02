import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/events.model';
import { EventService } from '../shared/events.service';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .event-image {
        height: 100px;
      }
    `,
  ],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'name';
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
    });
    // this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(
      null,
      this.event.sessions.map((s) => s.id)
    );
    session.id = nextId;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelNewSession() {
    this.addMode = false;
  }
}
