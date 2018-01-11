import {Component, OnInit, Renderer2, ElementRef, AfterViewInit, ViewChild} from '@angular/core';
import { BaconDirective } from './bacon/bacon.directive';

@Component({
  selector: 'app-more-on-renderer',
  templateUrl: './more-on-renderer.component.html',
  styleUrls: ['./more-on-renderer.component.css']
})
export class MoreOnRendererComponent implements OnInit, AfterViewInit {

  extraIngredient: string = "defaultExtraIngredient";

  //-- constructor ni argument ma access specifier muki dey ne to e class level declared variable bani jay
  constructor(private renderer: Renderer2, private el: ElementRef) {
    console.log("constructor of component here");
    console.log(el);
    console.log(this.extraIngredient);

    // const div = this.renderer.createElement('div');
    // const text = this.renderer.createText('Hello world!');
    //
    // this.renderer.appendChild(div, text);
    // this.renderer.appendChild(this.el.nativeElement, div);
  }

  //-- BaConDirective can be used like this, too
  //-- extraIngredient is initialised using appBacon custom directive
  @ViewChild(BaconDirective)
  set appBacon(directive: BaconDirective){
    console.log("coming in set appBacon");
    console.log(directive);
    this.extraIngredient = directive.ingredient;
    // console.log("here done");
  };

  ngOnInit() {
    console.log("ngOnInit is called");
    console.log(this.extraIngredient);
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit is called");
    console.log(this.extraIngredient);
  }



}
