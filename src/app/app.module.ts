import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component'
import { CommonNavbarComponent } from './common/common-navbar.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { EventService } from './events/shared/events.service';
import { ToastrService } from './common/service/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { EventListResolver } from './events/event-list-resolver.service';
import { AuthService } from './user/services/auth.service';
import { UserEditRouteActivator } from './user/user-edit-route-activator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';

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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    UserEditRouteActivator,
    { provide: 'checkCreateEventDeactivateFuntion', useValue: checkCreateEventDeactivateFuntion }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkCreateEventDeactivateFuntion(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('Are you sure want to exits this page and disgard the changes?')
  return true
}