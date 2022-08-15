import { ShoppingListService } from './../../services/shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category, Items } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  groups: Category[] = [{
    _id: "62f97e5316d78812dbd16b46",
    category_name: "New Home",
  }];
  items: Items[] = [];
  counts: number[] = []

  constructor(private categoryService: CategoriesService, private itemsService: ShoppingListService) { }

  ngOnInit(): void {
    
    this.categoryService.getAllGroups().subscribe(results => {
      this.groups = results.data;
      console.log(this.groups);

      this.itemsService.getAllItems().subscribe(results => {
        console.log(results.data);
        this.items = results.data;

        this.groups.forEach(group => {
          this.counts.push(this.items.filter((item: Items) => item.category == group.category_name).length)
        });
      }) 
    })    
  }

}
