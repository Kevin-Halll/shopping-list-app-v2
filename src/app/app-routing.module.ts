import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemsAddComponent } from './components/items-add/items-add.component';
import { ItemsEditComponent } from './components/items-edit/items-edit.component';
import { ItemsListComponent } from './components/items-list/items-list.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "all-items", component: ItemsListComponent},
  {path: "add-item", component: ItemsAddComponent},
  {path: "edit-item/:_id", component: ItemsEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
