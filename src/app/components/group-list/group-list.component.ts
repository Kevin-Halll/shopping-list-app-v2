import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: Category[] =[];

  constructor(private groupService:CategoriesService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(){
    this.groupService.getAllGroups().subscribe({
      next:(res) =>{
        this.groups = res.data
      },
      error:(err) =>{
        console.log(err);
      },
    })
  }

  removeGroup(id:string){
    this.groupService.deleteGroup(id).subscribe({
      next:(res) =>{
        alert('Category Deleted');
        this.getGroups();
      }
    })
  }

}
