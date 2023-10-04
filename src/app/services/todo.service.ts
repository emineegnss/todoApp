import { Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(
    @Inject('baseUrl') private baseUrl,
    private http: HttpClient
  ) { }

  addTodo(obj) {
    return this.http.post(this.baseUrl + '/todo', obj);
  }

  getAllTodos() {
    return this.http.get(this.baseUrl + '/todo');
  }

  updateTodo(obj) {
    
    return this.http.put(this.baseUrl + '/todo', obj);
}
removeTodo(id){
  return this.http.delete(this.baseUrl + '/todo/' + id);
}
}
