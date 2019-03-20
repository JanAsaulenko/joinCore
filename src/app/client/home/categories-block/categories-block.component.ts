import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../shared/services/home/category.service';

@Component({
  selector: 'app-categories-block',
  templateUrl: './categories-block.component.html',
  styleUrls: ['./categories-block.component.scss']
})
export class CategoriesBlockComponent implements OnInit {
    public categories;
  constructor(private categoriesServise: CategoryService) {
  }

  ngOnInit() {
    this.categories =  this.categoriesServise.getCategories();
  }

}
