import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Category } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-items-edit',
  templateUrl: './items-edit.component.html',
  styleUrls: ['./items-edit.component.css']
})
export class ItemsEditComponent implements OnInit {

  categories:Category[] = [];

  //edit item form instance
  addList: FormGroup = new FormGroup ({
    item_name:new FormControl(),
    category:new FormControl(),
    price:new FormControl(),
    quantity:new FormControl()
  })


  constructor( private groupService: CategoriesService, private itemsService: ShoppingListService,
    private routes:Router, private urlRoute: ActivatedRoute) {}
    
  ngOnInit(): void {
    this.groupService.getAllGroups().subscribe(results => {
      this.categories = results.data
      console.log(results.data);
      
    })
    
    this.itemsService.getItemById(this.urlRoute.snapshot.params['_id']).subscribe(results => {
      // assigning items to respective form fields
      this.addList = new FormGroup ({
        item_name:new FormControl(results.data.item_name),
        category:new FormControl(results.data.category),
        price:new FormControl(results.data.price),
        quantity:new FormControl(results.data.quantity)
      })
    })
  }


  onSubmit() {
    console.log(this.addList?.value);
    this.itemsService.updateItem(this.urlRoute.snapshot.params['_id'],this.addList?.value).subscribe();
    alert("Successful");
    this.routes.navigate(['/all-items']);
  }

}
