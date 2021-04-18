import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number = -1
  todo: Todo = new Todo()

  constructor(
    private service: TodoDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']

    if (this.id != -1) {
      this.service.retrieveTodo('max', this.id).subscribe(
        response => this.todo = response
      )
    }
  }

  saveTodo() {
    if (this.id === -1) {
      this.service.createTodo('max', this.todo).subscribe(
        response => {
          console.log(response)
          this.todo = response
          this.router.navigate(['todos'])
        }
      )
    } else {
      this.service.updateTodo('max', this.id, this.todo).subscribe(
        response => {
          console.log(response)
          this.todo = response
          this.router.navigate(['todos'])
        }
      )
    }
  }

}
