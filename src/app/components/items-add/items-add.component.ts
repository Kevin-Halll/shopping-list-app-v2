import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Category } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-items-add',
  templateUrl: './items-add.component.html',
  styleUrls: ['./items-add.component.css']
})
export class ItemsAddComponent implements OnInit {

  addList = new FormGroup({
    item_name: new FormControl(),
    category: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
  })
  categories:Category[] = [];

  constructor( private groupService: CategoriesService, private itemsService: ShoppingListService,
    private fb:FormBuilder,
    private routes:Router,) {}

  ngOnInit(): void {
    this.groupService.getAllGroups().subscribe(results => {
      this.categories = results.data
      console.log(results.data);
      
    })
  }
  onSubmit() {

    console.log(this.addList.value);
    this.itemsService.createItem(this.addList.value).subscribe();
    alert("Successful");
    this.routes.navigate(['/all-items']);
  }

}
