import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-observable-demo5',
  imports: [],
  templateUrl: './observable-demo5.component.html',
  styleUrl: './observable-demo5.component.css'
})
export class ObservableDemo5Component {
  ngOnInit() {
    // this.subject_demo();
    // this.behaviorsubject_demo();
    // this.replaySubject_demo();
    this.asyncSubject_demo();
  }
  subject_demo() {
    let mySubject = new Subject();
    mySubject.next('AAAAA')
    mySubject.subscribe(val => console.log('subscriber-1: ', val))
    mySubject.next('BBBBB')
    mySubject.subscribe(val => console.log('subscriber-2: ', val))
    mySubject.next('CCCCC')
  }
  behaviorsubject_demo() {
    let mySubject = new BehaviorSubject('Default Value');
    mySubject.next('AAAAA')
    mySubject.subscribe(val => console.log('subscriber-1: ', val))
    mySubject.next('BBBBB')
    mySubject.subscribe(val => console.log('subscriber-2: ', val))
    mySubject.next('CCCCC')
  }
  replaySubject_demo() {
    let mySubject = new ReplaySubject();
    mySubject.next('AAAAA')
    mySubject.subscribe(val => console.log('subscriber-1: ', val))
    mySubject.next('BBBBB')
    mySubject.subscribe(val => console.log('subscriber-2: ', val))
    mySubject.next('CCCCC')
  }
  asyncSubject_demo() {
    let mySubject = new AsyncSubject();
    mySubject.next('AAAAA')
    mySubject.subscribe(val => console.log('subscriber-1: ', val))
    mySubject.next('BBBBB')
    mySubject.subscribe(val => console.log('subscriber-2: ', val))
    mySubject.next('CCCCC');
    mySubject.complete();
  }
}
