import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  myName: string = 'Sachin tEnDuLKaR';
  mySal: number = 5000;
  today: Date = new Date();
}
