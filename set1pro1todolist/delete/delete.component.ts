import { Component, OnInit , Input} from '@angular/core';
import { ViewService } from '../view.service';
import { Todo } from '../default/Todo';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() send: Todo;
  constructor(private viewservice: ViewService) { }

  ngOnInit(): void {
  }

}
