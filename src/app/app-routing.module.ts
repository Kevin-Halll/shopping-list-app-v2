import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemsListComponent } from './components/items-list/items-list.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "all-items", component: ItemsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
