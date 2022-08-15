import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Category, Items } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: Category[] =[];
  counts!: number;
  items:Items[]=[];

  constructor(private groupService:CategoriesService, private itemsService: ShoppingListService) { }

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
    this.itemsService.getAllItems().subscribe({
      next:(res) => {
        this.groupService.getGroupById(id).subscribe({
          next:(res2) => {
            let groupFilter;
            groupFilter = res.data.filter(i => {
              return i.category == res2.data.category_name;
            })

            if(groupFilter.length == 0){
              this.groupService.deleteGroup(id).subscribe({
                  next:(res) =>{
                    alert('Category Deleted');
                    this.getGroups();
                  }
                })
            }else{
              alert(`${res2.data.category_name} category has ${groupFilter.length} item(s) \nRemove item(s) before proceeding.`)
            }
            console.log(groupFilter);
            
          }
        })
      }
    })
  }

}
