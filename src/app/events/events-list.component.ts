import { Component, Inject, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../common/service/toastr.service';
import { IEvent } from './shared/events.model';
import { EventService } from './shared/events.service';


@Component({
  templateUrl: './events-list.component.html'

})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  toastr:any
  constructor(private eventService: EventService, @Inject(TOASTR_TOKEN) private toastrService: Toastr, private route: ActivatedRoute) {
    this.toastr = toastrService
  }

  ngOnInit(){
    // this.eventService.getEvents().subscribe(events => { this.events = events});
    this.events = this.route.snapshot.data['events'];
  }

  handleEventClick(data) {
    this.toastr.success(data)
  }
}
