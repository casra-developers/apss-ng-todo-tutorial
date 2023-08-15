import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent {
  @Input() id: number;
  @Input() todo: Todo;

  
}
