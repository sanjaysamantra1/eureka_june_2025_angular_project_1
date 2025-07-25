import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  num: number = 4;
  flag: boolean = true;
  isLoggedIn: boolean = true;

  cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota', 'Mahindra'];
  arr = [10,20,30,40];

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];

  myStyle1 = {
    color: "red",
    border: "5px dotted green",
    padding: "10px"
  }
  myStyle2 = {
    color: "blue",
    border: "5px dashed purple",
    padding: "10px"
  }

  myFunction() {
    return this.num % 2 == 0 ? this.myStyle1 : this.myStyle2;
  }

  myClasses = {
    class1: true,
    class2: false,
    class3: true
  }
  getClassNames() {
    return this.myClasses;
  }
}
