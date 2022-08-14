import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsGroupedComponent } from './items-grouped.component';

describe('ItemsGroupedComponent', () => {
  let component: ItemsGroupedComponent;
  let fixture: ComponentFixture<ItemsGroupedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsGroupedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsGroupedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
