import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean){
    if(!condition){ //onlyOdd false ase to j even numbers avse
      // console.log("true true");
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // console.log("false false");
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

  }

}
