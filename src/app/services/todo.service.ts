import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id: any;
  value: string;
}
const initialTodos = [
  { id: 1, value: 'Complete Angular Assignment' },
  { id: 2, value: 'Revise Spring' },
];

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoSubject = new BehaviorSubject<Todo[]>(initialTodos);
  readonly todoObs = this.todoSubject.asObservable();

  private todosArr: Todo[] = initialTodos;
  private nextId = 2;
  create(item: any) {
    item.id = ++this.nextId;
    this.todosArr.push(item);
    this.todoSubject.next(Object.assign([], this.todosArr));
  }
  remove(id: number) {
    this.todosArr.forEach((todo, ind) => {
      if (todo.id === id) {
        this.todosArr.splice(ind, 1);
      }
      this.todoSubject.next(Object.assign([], this.todosArr));
    });
  }
}
