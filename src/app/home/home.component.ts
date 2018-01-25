import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Observer, Subscriber, Subscription} from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  mySubscriber;
  myNumberSubscriber;

  constructor() { }

  ngOnInit() {

    //-- this will run infinitely on specified interval
    const myNumbers = Observable.interval(2000); //time in millisecond
    this.myNumberSubscriber = myNumbers.subscribe((number: Number) => {
      console.log("number : " + number);
    });

    //-- this will run only when I subscribe to it
    const myObservable = Observable.create((observer: Observer<string>) => {
      console.log("in create");
      setTimeout(() => {
        observer.next("first package");
      }, 2000);

      setTimeout(() => {
        observer.next("second package");
      }, 4000);

      setTimeout(() => {
        // observer.next("third package");
        observer.error("this is not gonna work");
      }, 8000);

      setTimeout(() => {
        observer.complete();
      }, 10000);
    });

    //-- here above observable subscribed
    console.log("now subscribing");
    this.mySubscriber = myObservable.subscribe(
      (data: string) => { console.log("data : " + data); },
      (error: string) => { console.log("error : " + error); },
      () => { console.log("completed"); }
    );
  }

  ngOnDestroy(){
    this.myNumberSubscriber.unsubscribe();
    this.mySubscriber.unsubscribe();
  }

}
