import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  load() {
    return this.httpClient.get('https://dummyjson.com/todos?limit=10&skip=30');
  }
}
