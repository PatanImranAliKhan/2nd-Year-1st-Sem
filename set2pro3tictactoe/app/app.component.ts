import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TicTacToe';
  public a;
  public b;
  public n = false;
  submit(): void
  {
    this.n = true;
  }
}
