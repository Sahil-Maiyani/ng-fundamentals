import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl:'./create-event.component.html'
})
export class CreateEventComponent{
    isDirty:boolean = true
    router:any
    constructor(private routerService: Router){
        this.router = this.routerService
    }
    handleCancelEvent(){
        this.router.navigate(['/events'])
    }
}