import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  myName: string = 'Virat Kohli';  // state variable / property / data
  img_url: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJARAnM4WDtLmY7lOMvZsVY-B6VWWowKJ9g&s';
}
