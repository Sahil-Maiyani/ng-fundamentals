import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/events.service';

@Component({
  templateUrl: './create-event.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error :ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateEventComponent {
  isDirty: boolean = true;
  router: any;
  newEvent;
  constructor(
    private routerService: Router,
    private eventService: EventService
  ) {
    this.router = this.routerService;
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }

  handleCancelEvent() {
    this.router.navigate(['/events']);
  }
}
