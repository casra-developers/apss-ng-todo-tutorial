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
  todos$ = this.todosService.todos$;

  constructor(private todosService: TodoService) {}

  ngOnInit(): void {
    this.todosService.load();
  }

  onToogleDone(id: number): void {
    this.todos.map((value, i) => {
      if (id === i) value.completed = !value.completed;
    });
  }

  onRemoveTodo(id: number): void {
    this.todosService.remove(id);
  }
}
