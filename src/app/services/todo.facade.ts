import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoFacade {
  
  private todoListSubject = new BehaviorSubject<Todo[]>([]);
  readonly todoList$ = this.todoListSubject.asObservable();

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  readonly isLoading$ = this.isLoadingSubject.asObservable();

  constructor(private todoService: TodoService) { }

  load() {
    this.isLoadingSubject.next(true);
    this.todoService.load().subscribe({
      next: (data: any) => {
        this.todoListSubject.next(data.todos as Todo[]);
        this.isLoadingSubject.next(false);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
