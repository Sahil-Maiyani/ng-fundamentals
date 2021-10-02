import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router"
import { EventService } from "../shared/events.service"

// This activator use has deprecated in module 14
@Injectable()
export class DEPRECATED_EventRouteActivator implements CanActivate {

    constructor(private eventService: EventService, private router : Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id'])
        if(!eventExists)
            this.router.navigate(['/404'])

        return eventExists;
    }
}
