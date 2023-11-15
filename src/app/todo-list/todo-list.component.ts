import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title = 'Todo List';

  todos: Todo[];
  isLoading = true;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.load().subscribe({
      next: (res: any) => {
        this.todos = res.todos as Todo[];
        this.isLoading = false;
      },
      error: er => {
        console.log(er);
        this.isLoading = false;
      }
    });
  }

  onToogleDone(id: number): void {
    this.todos.map((value, i) => {
      if (id === i) value.completed = !value.completed;
    });
  }

  onRemoveTodo(id: number): void {
    this.todos = this.todos.filter((value, i) => id !== i);
  }
}
