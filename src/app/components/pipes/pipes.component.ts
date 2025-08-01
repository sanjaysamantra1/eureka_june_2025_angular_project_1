import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { MysortPipe } from '../../pipes/mysort.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    OrdinalPipe,
    MysortPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  myName: string = 'Sachin tEnDuLKaR';
  mySal: number = 5000;
  today: Date = new Date();

  user = { name: 'virat kohli', age: 37, add: 'delhi' };
  arr = [50, 10, 20, 40, 30];

  msg1 = '';
  msg2 = '';

  cardinal = 21;
}
