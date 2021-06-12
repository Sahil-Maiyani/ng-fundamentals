import { Component, ElementRef, Inject, Input, ViewChild } from "@angular/core";
import { JQ_TOKEN } from "../service/jQuery.service";

@Component({
  selector: 'simple-modal',
  styleUrls: ['./simple-modal.component.css'],
  templateUrl: './simple-modal.component.html'
})
export class SimpleModalComponent {
  @Input() title: string = "";
  @Input() elementId: string;
  @ViewChild('modalContainer') modalContainer: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $:any){}

  closeModal(){
    // this.$('#'+this.elementId).modal('hide');
    this.$(this.modalContainer.nativeElement).modal('hide');
  }
}
