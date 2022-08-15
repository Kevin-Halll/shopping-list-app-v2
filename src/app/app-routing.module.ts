import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGroupComponent } from './components/create-group/create-group.component';
import { GroupEditComponent } from './components/group-edit/group-edit.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsAddComponent } from './components/items-add/items-add.component';
import { ItemsEditComponent } from './components/items-edit/items-edit.component';
import { ItemsGroupedComponent } from './components/items-grouped/items-grouped.component';
import { ItemsListComponent } from './components/items-list/items-list.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "all-items", component: ItemsListComponent},
  {path: "add-item", component: ItemsAddComponent},
  {path: "edit-item/:_id", component: ItemsEditComponent},
  {path: ":category/:_id", component: ItemsGroupedComponent},
  {path: "add-group", component: CreateGroupComponent},
  {path: "all-groups", component: GroupListComponent},
  {path: "category/edit-group/:_id", component: GroupEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
