import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { Todo } from '../default/Todo';
import { ViewService } from '../view.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Output() send: EventEmitter<any> = new EventEmitter();
  public abc;
  todos: Todo[] ;
  del: Todo[] = [];
  constructor(private viewservice: ViewService) { }

  ngOnInit(): void {
    this.todos = this.viewservice.gettodo();
  }


  deletetodo(todo: Todo): void
  {
    const ar = {
      name: todo.name,
      completed : true
    };
    this.todos = this.todos.filter(t => t.name !== todo.name);
    this.del.push(ar);
  }
  onSubmit(): any
  {
    const tod = {
      name : this.abc,
      completed : false
    };
    this.todos.push(tod);
  }

}
