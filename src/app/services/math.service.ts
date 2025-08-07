import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  num_1 = 100;
  num_2 = 200;

  add(a: any, b: any) {
    return a + b;
  }
  sub(a: any, b: any) {
    return a - b;
  }
  mul(a: any, b: any) {
    return a * b;
  }
}
