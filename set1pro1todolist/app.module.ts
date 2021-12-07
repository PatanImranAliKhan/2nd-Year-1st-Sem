import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { DataComponent } from './data/data.component';
import { DeleteComponent } from './delete/delete.component';
import { FinishComponent } from './finish/finish.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DataComponent,
    DeleteComponent,
    FinishComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
