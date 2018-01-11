import {Directive, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBacon]'
})
export class BaconDirective {

  public ingredient: string = "mayo";

  constructor(private renderer: Renderer2, private eleRef: ElementRef) {
    console.log("bacon dir is constructor callled");
    let bacon = this.renderer.createText("Idli Sambhar ");

    // eleRef.native holds an element in which appBacon attr is specified
    // it will become parent element on which child will be appended that is bacon
    this.renderer.appendChild(this.eleRef.nativeElement, bacon);
  }



}
