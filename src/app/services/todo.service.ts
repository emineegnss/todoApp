import { Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(
    @Inject('baseUrl') private baseUrl,
    private httpClient: HttpClient
  ) { }
   addTodo(obj) {
    return this.httpClient.post(this.baseUrl + '/todo', obj);
  }

  getAllTodos() {
    return this.httpClient.get(this.baseUrl + '/todo');
  }

  updateTodo(obj) {
    return this.httpClient.post(this.baseUrl + '/todo', obj);
  }

  removeTodo(id) {
    return this.httpClient.delete(this.baseUrl + '/todo/' + id);
  }

}
