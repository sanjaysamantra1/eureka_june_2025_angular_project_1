import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [
    FormsModule,
    Child1Component,
    Child2Component
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  a: number;
  b: number;
  parentAddress: string = '';
  receiveDataFromChild(data: any) {
    this.parentAddress = data;
  }
  constructor() {
    console.log("Parent constructor");
    this.a = 10;
    this.b = 20;
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('Parent ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Parent ngAfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('Parent ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('Parent ngOnDestory');
  }

}
