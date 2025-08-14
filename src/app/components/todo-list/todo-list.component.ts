import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos$!: Observable<any>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.todoObs;
  }
  deleteTodo(id: number) {
    this.todoService.remove(id);
  }
}
