import { style } from '@angular/animations';
import { Component, Inject } from '@angular/core';
import { ISession } from '../events/shared/events.model';
import { EventService } from '../events/shared/events.service';
import { AuthService } from '../user/services/auth.service';
import { JQ_TOKEN } from './service/jQuery.service';

@Component({
  selector: 'common-nav',
  templateUrl: './common-navbar.component.html',
  styles: [
    `
      .nav .nav-bar {
        font-size: 15px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
      li > a.activeLink {
        color: #f97924;
      }
    `,
  ],
})
export class CommonNavbarComponent {
  searchTerm: string = '';
  foundSessions: ISession[];

  constructor(
    public authService: AuthService,
    private eventService: EventService,
    // @Inject(JQ_TOKEN) private $: any
  ) {}

  searchSessions(searchTerm: string) {
    this.eventService
      .searchSessions(searchTerm).subscribe(sessions => {
        this.foundSessions = sessions;
        // console.log('foundSessions :>> ', this.foundSessions);
      });
      // this.$('#simple-modal').modal();
  }
}
