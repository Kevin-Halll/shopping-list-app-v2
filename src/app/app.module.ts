import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemsEditComponent } from './components/items-edit/items-edit.component';
import { ItemsAddComponent } from './components/items-add/items-add.component';
import { ItemsGroupedComponent } from './components/items-grouped/items-grouped.component';
import { CreateGroupComponent } from './components/create-group/create-group.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupEditComponent } from './components/group-edit/group-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ItemsListComponent,
    ItemsEditComponent,
    ItemsAddComponent,
    ItemsGroupedComponent,
    CreateGroupComponent,
    GroupListComponent,
    GroupEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
