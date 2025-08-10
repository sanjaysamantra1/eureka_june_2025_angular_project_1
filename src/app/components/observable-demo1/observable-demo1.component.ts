import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable-demo1',
  imports: [],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component implements OnInit {
  constructor(private httpClient: HttpClient) {
  }
  ngOnInit() {
    this.fetchData_promise();
    this.fetchData_observable();
    this.fetchPhotoes();
  }

  fetchData_promise() {
    fetch('https://jsonplaceholder.typicode.com/users').then(
      (response) => {
        console.log(response);
        response.json().then(
          finalData => {
            console.log(finalData)
          }
        )
      },
      err => {
        console.log(err)
      }
    );
  }

  fetchData_observable() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (data) => { console.log(data) },  // n times
      error: (err) => { console.log(err) },
      complete: () => { console.log('All data received...') } // 1 time
    });
  }
  fetchPhotoes() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/photos').subscribe({
      next: (data) => { console.log(data) },  // n times
      error: (err) => { console.log(err) },
      complete: () => { console.log('All data received...') } // 1 time
    });
  }
}
