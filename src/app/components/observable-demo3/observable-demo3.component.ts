import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, forkJoin, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo3',
  imports: [],
  templateUrl: './observable-demo3.component.html',
  styleUrl: './observable-demo3.component.css'
})
export class ObservableDemo3Component {
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    // this.forkjoin_demo();
    // this.mergemap_demo();
    this.concatmap_demo();
  }

  forkjoin_demo() {
    let Obs_1 = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    let Obs_2 = this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    let Obs_3 = this.httpClient.get('https://jsonplaceholder.typicode.com/comments');
    forkJoin([Obs_1, Obs_2, Obs_3]).subscribe({
      next: (responseArr) => {
        console.log(responseArr)
      }
    });
  }

  mergemap_demo() {
    let userObservable = of(1, 2, 3, 4);

    userObservable.pipe(mergeMap(OuterObservableResponse => {
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${OuterObservableResponse}`)
    })).subscribe(innerObservableResponse => {
      console.log(innerObservableResponse)
    });

  }

  concatmap_demo() {
    let userObservable = of(1, 2, 3, 4);
    userObservable.pipe(concatMap(OuterObservableResponse => {
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${OuterObservableResponse}`)
    })).subscribe(innerObservableResponse => {
      console.log(innerObservableResponse)
    });

  }
}
