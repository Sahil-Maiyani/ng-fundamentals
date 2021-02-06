import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { EventService } from "./shared/events.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { IEvent } from "./shared/events.model";

@Injectable()
export class EventListResolver implements Resolve<any>{
    constructor(private eventService : EventService ){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<IEvent[]> {
        return this.eventService.getEvents().pipe(map(events => events))
    }

}