import { Component } from '@angular/core';

@Component({
  selector: 'events-app-root',
  template: `
    <common-nav></common-nav>
    <router-outlet></router-outlet>
  `,
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
