import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //this is needed for template driven approach
    HttpModule,
    ReactiveFormsModule //this is needed for reactive approach
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
