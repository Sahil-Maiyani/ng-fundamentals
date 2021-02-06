import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/service/toastr.service';
import { IEvent } from './shared/events.model';
import { EventService } from './shared/events.service';


@Component({
  templateUrl: './events-list.component.html'

})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  toastr:any
  constructor(private eventService: EventService, private toastrService: ToastrService, private route: ActivatedRoute) {
    this.toastr = toastrService
  }
  
  ngOnInit(){
    this.eventService.getEvents().subscribe(events => { this.events = events});
  }

  handleEventClick(data) {
    this.toastr.success(data)
  }
}