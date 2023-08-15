import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent {
  @Input() id: number;
  @Input() todo: Todo;

  @Output() toogleDone = new EventEmitter<number>();
  @Output() removeTodo = new EventEmitter<number>();

  onToogleDone(id: number): void {
    this.toogleDone.emit(id);
  }

  onRemoveTodo(id: number): void {
    this.removeTodo.emit(id);
  }
}
