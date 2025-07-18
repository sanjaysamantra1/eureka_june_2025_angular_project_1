import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.component.html',
  styles: ['select { color:red; }']
  // styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  myName: string = 'Virat Kohli';  // state variable / property / data
  img_url: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJARAnM4WDtLmY7lOMvZsVY-B6VWWowKJ9g&s';
  flag: boolean = true;
  rowspanValue = 2;
  num1: number = 10;
  num2: number = 20;
  msg: string = '';
  selectedState: string = '';
  op: string = '+';
  count: number = 0;

  performOperation() {
    switch (this.op) {
      case '+': return this.num1 + this.num2; break;
      case '-': return this.num1 - this.num2; break;
      case '*': return this.num1 * this.num2; break;
      case '/': return this.num1 / this.num2; break;
      default: return 'Not valid input'
    }
  }

  toggleFlag() {
    this.flag = !this.flag;
  }
  changeTheme() {
    this.flag = !this.flag;
    if (this.flag) {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = 'black';
    }
  }

  addResult: number = 0;
  addition(a: string, b: string) {
    this.addResult = Number(a) + Number(b);
  }

  f1() {
    alert('This is f1...')
  }
}
