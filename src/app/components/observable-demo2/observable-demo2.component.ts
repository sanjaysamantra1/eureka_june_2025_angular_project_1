import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [CommonModule],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {
  carsArr: any = [];

  constructor() { }

  ngOnInit() {
    this.createCustomObservable()
    this.interval_demo()
  }
  createCustomObservable() {
    const carPublisher = new Observable((observer) => {
      observer.next('Tata');
      observer.next('Honda');
      observer.next('Maruti');
      observer.complete();
    });
    const carSubscriber = carPublisher.subscribe({
      next: (val) => {
        this.carsArr.push(val);
        console.log(val)
      },
      error: (e) => console.error(e),
      complete: () => console.info('completed')
    })
  }

  numsPublisher: any;
  interval_demo() {
    this.numsPublisher = interval(1000);  // publisher

    this.numsPublisher.subscribe((val: any) => console.log(val)); // subscribe

  }
}
