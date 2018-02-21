import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  error_message: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.error_message = this.activatedRoute.data['message']; //check app-routing.module where data pro is defined
    //subscribe the changes same as queryParams and fragment
    this.activatedRoute.data.subscribe((data : Data) => {
      this.error_message = data['message'];
    });
  }

}
