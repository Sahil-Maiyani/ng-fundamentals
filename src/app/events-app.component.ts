import { Component } from '@angular/core';
import { AuthService } from './user/services/auth.service';

@Component({
  selector: 'events-app-root',
  template: `
    <common-nav></common-nav>
    <router-outlet></router-outlet>
  `,
})
export class EventsAppComponent {
  title = 'ng-fundamentals';

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.checkAuthStatus();
  }
}
