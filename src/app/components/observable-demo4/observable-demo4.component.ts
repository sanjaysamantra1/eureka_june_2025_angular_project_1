import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, switchMap, map } from 'rxjs';

@Component({
  selector: 'app-observable-demo4',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './observable-demo4.component.html',
  styleUrl: './observable-demo4.component.css'
})
export class ObservableDemo4Component {
  searchResult$: Observable<any> | undefined;
  searchForm: any;
  constructor(private http: HttpClient) {
    this.searchForm = new FormGroup({
      searchField: new FormControl()
    });
  }
  ngOnInit() {
    this.searchResult$ = this.searchForm.get("searchField").valueChanges.pipe(
      switchMap((term) =>
        // this.http.get<any>(`https://swapi.dev/api/people/?search=${term}`)
        this.http.get<any>(`https://dummyjson.com/users/search?q=${term}`)
      ),
      map((response: any) =>
        // response.count > 0 ? response.results : [];
        response.users.length > 0 ? response.users : []
      ));
  }
}
