import { MathService } from './../../services/math.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-math2',
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {
  mathService = inject(MathService); // dependency Injection

  constructor() {
    console.log('I am math-2 comp')
    console.log('num-1 from service', this.mathService.num_1)
  }
}
