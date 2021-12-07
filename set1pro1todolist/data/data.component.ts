import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { ViewService } from '../view.service';
import { Todo } from '../default/Todo';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deletetodo: EventEmitter<Todo> = new EventEmitter();
  public nm = false;
  public abc;
  constructor(private viewservice: ViewService) { }

  ngOnInit(): void {
  }
  setClass(): any
  {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };

    return classes;
  }

  changetodo(todo): void
  {
    todo.completed = !todo.completed;
  }
  deleteTodo(todo): void
  {
    this.deletetodo.emit(todo);
  }

  edittodo(todo): void
  {
    this.nm = true;
  }
  onclick(to): any
  {
    to.name = this.abc;
    to.completed = false;
    this.nm = false;
  }
}
