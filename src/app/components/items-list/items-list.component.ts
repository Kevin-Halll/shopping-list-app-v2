import { Items } from './../../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  items: Items[] = [];
  constructor(private itemService: ShoppingListService) { }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe(results => {
      this.items = results.data
    })
  }

}
