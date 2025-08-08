import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component implements OnInit {
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((response:any) => {
      console.log(response);
    })
  }
}
