import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveAllTodos(username: string) {
    return this.httpClient.get<Todo[]>(`${API_URL}/users/${username}/todos`)
  }

  deleteTodo(username: string, id: number) {
    return this.httpClient.delete(`${API_URL}/users/${username}/todos/${id}`)
  }

  retrieveTodo(username: string, id: number) {
    return this.httpClient.get<Todo>(`${API_URL}/users/${username}/todos/${id}`)
  }

  createTodo(username: string, todo: Todo) {
    return this.httpClient.post<Todo>(`${API_URL}/users/${username}/todos`, todo)
  }

  updateTodo(username: string, id: number, todo: Todo) {
    return this.httpClient.put<Todo>(`${API_URL}/users/${username}/todos/${id}`, todo)
  }
}
