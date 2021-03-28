import { Routes } from '@angular/router';
import { Error404Component } from './error/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';
import { EventsListComponent } from './events/events-list.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['checkCreateEventDeactivateFuntion'] },
    { path: 'events/sessions/new', component: CreateSessionComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: '404', component: Error404Component },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
]
