import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DeleteComponent } from './delete/delete.component';
import { FinishComponent } from './finish/finish.component';


const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'delete', component: DeleteComponent},
  {path: 'finish', component: FinishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TodoComponent, DeleteComponent, FinishComponent];
