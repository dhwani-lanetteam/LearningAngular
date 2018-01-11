import {Directive, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[appGrayBgHighlight]'
})
export class GrayBgHighlightDirective {

  constructor(private renderer: Renderer2, private eleRef: ElementRef) {
    console.log("GrayBgHighlightDirective  constructor called");
    this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor','#bebebe');
  }
}
