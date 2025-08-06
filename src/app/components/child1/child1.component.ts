import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs: ['a'],
  outputs : ['addressEvent']
})
export class Child1Component {
  a: any;
  myName = 'Sachin Tendulkar';
  address = 'Mumbai';
  addressEvent = new EventEmitter();
  sendDataToParent() {
    this.addressEvent.emit(this.address);
  }

  constructor() {
    console.log("Child constructor");
  }
  ngOnChanges() {
    console.log('Child ngOnChanges');
  }
  ngOnInit() {
    console.log('Child ngOnInit');
  }
}
