import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title = 'Todo List';

  todos: Todo[];

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First task',
        completed: false
      },
      {
        content: 'Second task',
        completed: true
      }
    ];
  }


}
