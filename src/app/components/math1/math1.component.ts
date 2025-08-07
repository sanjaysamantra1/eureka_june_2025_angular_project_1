import { MathService } from './../../services/math.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-math1',
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {
  constructor(private mathService: MathService) { // Dependency Injection
    console.log(`addition of 10 and 20 is ${this.mathService.add(10, 20)}`);
    console.log(`subtraction of 10 and 20 is ${this.mathService.sub(10, 20)}`);
    console.log(`multiplication of 10 and 20 is ${this.mathService.mul(10, 20)}`);
  }
}
