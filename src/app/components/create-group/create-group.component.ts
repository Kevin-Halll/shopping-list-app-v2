import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  createGroup = new FormGroup({
    category_name: new FormControl()
  });
  constructor(private groupService:CategoriesService, private routes: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.groupService.createGroup(this.createGroup.value).subscribe();
    alert('Category Added');
    this.routes.navigate(["/"])
  }
}
