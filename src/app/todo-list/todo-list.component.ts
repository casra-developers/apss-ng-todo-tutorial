import { Component, OnInit } from '@angular/core';
import { TodoFacade } from '../services/todo.facade';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title = 'Todo List';

  // todos: Todo[];
  // isLoading = true;

  todos$ = this.todoFacade.todoList$;
  isLoading$ = this.todoFacade.isLoading$;

  constructor(private todoFacade: TodoFacade) {}

  ngOnInit(): void {
    this.todoFacade.load();
  }

  onToogleDone(id: number): void {
    // this.todos.map((value, i) => {
    //   if (id === i) value.completed = !value.completed;
    // });
  }

  onRemoveTodo(id: number): void {
    // this.todos = this.todos.filter((value, i) => id !== i);
  }
}
