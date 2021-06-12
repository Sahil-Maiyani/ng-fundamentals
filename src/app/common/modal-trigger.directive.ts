import { Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { JQ_TOKEN } from './service/jQuery.service';

@Directive({
  selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef) {
    this.el = ref.nativeElement;
  }
  ngOnInit(): void {
    this.el.addEventListener('click', e=> {
      this.$('#simple-modal').modal();
    });
  }
}
