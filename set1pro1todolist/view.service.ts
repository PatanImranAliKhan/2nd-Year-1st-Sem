import { Injectable } from '@angular/core';

import { Todo } from './default/Todo';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  todo: Todo;
  constructor() {}
    gettodo(): any
    {
      return [
      ];
    }
}
