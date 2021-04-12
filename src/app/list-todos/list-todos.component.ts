import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  id: number = 0
  description: string = ''
  done: boolean = false
  targetDate: Date = new Date()

  constructor() { }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = []
  message: string = ''

  constructor(
    private service: TodoDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos()
  }
  refreshTodos() {
    this.service.retrieveAllTodos('max').subscribe(
      response => {
        this.todos = response
      }
    )
  }

  deleteTodo(id: number) {
    console.log(`delete todo ${id}`)
    this.service.deleteTodo('max', id).subscribe(
      response => {
        console.log(response)
        this.message = `Delete of todo ${id} successful"!`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id: number) {
    console.log(`update todo ${id}`)
    this.router.navigate(['todos', id])
  }
}
