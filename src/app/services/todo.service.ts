import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoSubject = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todoSubject.asObservable();

  constructor() { }

  load(): void {
    of<Todo[]>(this.todoList).subscribe({
      next: (todos) => {
        this.todoSubject.next(todos);
      },
      error: (err) => {
        console.log('err', err);

      }
    });
  }

  remove(id: number): void {
    this.todoList = this.todoList.filter((value, i) => id !== i);
    this.load();
  }

  add(content: string): void {
    this.todoList.push({
      content: content,
      completed: false
    });
    this.load();
  }

  toogleDone(id: number): void {
    this.todoList.map((value, i) => {
      if (id === i) value.completed = !value.completed;
    });
    this.load();
  }

  todoList = [
    {
      content: 'First task',
      completed: false
    },
    {
      content: 'Second task',
      completed: true
    },
    {
      content: 'Third task',
      completed: false
    }
  ];

}
