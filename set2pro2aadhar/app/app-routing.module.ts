import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CitizenComponent } from './citizen/citizen.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'search', component: SearchComponent},
  {path: 'edit', component: EditComponent},
  {path: 'citizen', component: CitizenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminComponent, SearchComponent, EditComponent, CitizenComponent];
