import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {
  createGroup = new FormGroup({
    category_name: new FormControl()
  });
  constructor(private groupService: CategoriesService, private urlRoute:ActivatedRoute, private navRoute: Router) { }

  ngOnInit(): void {
    this.groupService.getGroupById(this.urlRoute.snapshot.params['_id']).subscribe({
      next:(res) => {
        this.createGroup = new FormGroup({
          category_name: new FormControl(res.data.category_name)
        });
      }
    })
  }

  onSubmit(){
    this.groupService.updateGroup(this.urlRoute.snapshot.params['_id'], this.createGroup.value).subscribe({
      next: () => {
        alert(`Category Updated`);
        this.navRoute.navigate(['/all-groups'])
      }
    })
  }
}
