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
        id: 1,
        todo: 'First task',
        completed: false,
        userId: 1
      },
      {
        id: 2,
        todo: 'Second task',
        completed: true,
        userId: 1
      },
      {
        id: 3,
        todo: 'Third task',
        completed: false,
        userId: 2
      }
    ];
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
