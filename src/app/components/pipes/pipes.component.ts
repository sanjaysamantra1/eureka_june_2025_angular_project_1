import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    OrdinalPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  myName: string = 'Sachin tEnDuLKaR';
  mySal: number = 5000;
  today: Date = new Date();

  user = { name: 'virat kohli', age: 37, add: 'delhi' };
  arr = [10, 20, 30, 40, 50, 60, 70];

  msg1 = '';
  msg2 = '';

  cardinal = 21;
}
