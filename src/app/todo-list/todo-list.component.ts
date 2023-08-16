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

  todos$ = this.todosService.todos$;

  inputTodo = '';

  constructor(private todosService: TodoService) {}

  ngOnInit(): void {
    this.todosService.load();
  }

  onToogleDone(id: number): void {
    this.todosService.toogleDone(id);
  }

  onRemoveTodo(id: number): void {
    this.todosService.remove(id);
  }

  addTodo(): void {
    this.todosService.add(this.inputTodo);
    this.inputTodo = '';
  }
}
