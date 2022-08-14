import { Items } from 'src/interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-items-grouped',
  templateUrl: './items-grouped.component.html',
  styleUrls: ['./items-grouped.component.css']
})
export class ItemsGroupedComponent implements OnInit {
  items:Items[] = [];
  group: string = '';
  constructor(private itemService: ShoppingListService, private urlRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems(){
    this.itemService.getAllItems().subscribe(results => {
      this.items = results.data.filter(i => {
        return  i.category == this.urlRoute.snapshot.params['category']
      })
      console.log(this.items);  
      this.group = this.urlRoute.snapshot.params['category']
    })
  }

  removeItem(id:string){
    this.itemService.deleteItem(id).subscribe({
      next:(res) => {
        alert('Item deleted')
        this.getAllItems()
      },
      error: (err) => {
        alert(`Error removing item`)
      }
    })
  }
}
