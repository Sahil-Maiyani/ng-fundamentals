import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { CommonNavbarComponent } from './common/common-navbar.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventService } from './events/shared/events.service';
import { Toastr, TOASTR_TOKEN } from './common/service/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './error/404.component';
import { EventListResolver } from './events/event-list-resolver.service';
import { AuthService } from './user/services/auth.service';
import { UserEditRouteActivator } from './user/user-edit-route-activator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { JQ_TOKEN } from './common/service/jQuery.service';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { UpvoteComponent } from './events/event-details/upvote/upvote.component';
import { VoterService } from './events/event-details/voter.service';
import { LocationValidator } from './events/location-validator.directive';
import { EventResolver } from './events/event-resolver.service';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    CommonNavbarComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTriggerDirective,
    LocationValidator,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventResolver,
    EventListResolver,
    AuthService,
    VoterService,
    UserEditRouteActivator,
    {
      provide: 'checkCreateEventDeactivateFuntion',
      useValue: checkCreateEventDeactivateFuntion,
    },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkCreateEventDeactivateFuntion(
  component: CreateEventComponent
) {
  if (component.isDirty)
    return window.confirm(
      'Are you sure want to exits this page and disgard the changes?'
    );
  return true;
}
