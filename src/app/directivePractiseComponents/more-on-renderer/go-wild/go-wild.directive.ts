import {Directive, OnInit, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[appGoWild]'
})
export class GoWildDirective implements OnInit{

  constructor(private renderer: Renderer2, private eleRef: ElementRef) {
    console.log("constructor GoWildDirective called");
  }

  ngOnInit(){
    console.log("ngOnInit of GoWildDirective");
    this.renderer.addClass(this.eleRef.nativeElement, 'wild');
  }

}
