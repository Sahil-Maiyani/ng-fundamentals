import {Component, Input, Output, EventEmitter} from '@angular/core'
import { IEvent } from './shared/events.model'

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles:[
        `
        .thumbnail {min-height: 250px}
        .well div {color: #bbb}
        `
    ]
    
})
export class EventThumbnailComponent{
  @Input()  event: IEvent
@Output() eventClick: any = new EventEmitter()
  handleClickMe(){
    this.eventClick.emit( this.event.name + ' is selected.')
  }
}