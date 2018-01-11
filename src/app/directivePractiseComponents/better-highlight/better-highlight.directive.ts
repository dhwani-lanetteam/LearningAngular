import {Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() highlightBorderColor:string = '';

  @HostBinding('style.border') border: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'cyan');
    // this.renderer.setStyle(this.element.nativeElement, 'opacity', 0.5);
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // debugger
    console.log(this.highlightBorderColor);
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'cyan');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
    this.border = "2px solid" + this.highlightBorderColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.border = '';
  }

}
