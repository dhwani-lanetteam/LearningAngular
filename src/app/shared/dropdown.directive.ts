import {Directive, ElementRef, Renderer2, HostListener, HostBinding} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') openIt: boolean = false;

  constructor(){  }

  @HostListener('click')
  clickOnManageRecipe() {

    //--- my Approach so tedious
    // if (this.openIt){
    //   this.render.removeClass(this.eleRef.nativeElement, 'open');
    // } else {
    //   this.render.addClass(this.eleRef.nativeElement, 'open');
    // }
    this.openIt = !this.openIt;

  }

}
