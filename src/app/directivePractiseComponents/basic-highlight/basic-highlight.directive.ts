import {Directive, OnInit, ElementRef} from "@angular/core";

@Directive({
  selector: '[appBasicHighLight]'
})
export class BasicHighLightDirective implements OnInit {

  constructor(private elementRef: ElementRef){  }

  ngOnInit(){
    console.log("coming here");
    this.elementRef.nativeElement.style.backgroundColor = "black";
    this.elementRef.nativeElement.style.color = "white";
  }

}
