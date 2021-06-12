import { Component, Input } from "@angular/core";

@Component({
  selector: 'simple-modal',
  styleUrls: ['./simple-modal.component.css'],
  templateUrl: './simple-modal.component.html'
})
export class SimpleModalComponent {
  @Input() title: string = "";
}
