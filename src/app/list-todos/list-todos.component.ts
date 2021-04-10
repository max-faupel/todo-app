import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = []
  message: string = ''

  constructor(private service: TodoDataService) { }

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
}
