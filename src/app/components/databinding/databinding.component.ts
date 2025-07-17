import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  myName: string = 'Virat Kohli';  // state variable / property / data
  img_url: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJARAnM4WDtLmY7lOMvZsVY-B6VWWowKJ9g&s';
  flag: boolean = false;
  rowspanValue = 2;
  num1: number = 10;
  num2: number = 20;

  addResult: number = 0;
  addition(a: string, b: string) {
    this.addResult = Number(a) + Number(b);
  }

  f1() {
    alert('This is f1...')
  }
}
