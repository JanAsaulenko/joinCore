import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../shared/services/home/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories-block',
  templateUrl: './categories-block.component.html',
  styleUrls: ['./categories-block.component.scss']
})
export class CategoriesBlockComponent implements OnInit {
  public categories;

  constructor(private categoriesServise: CategoryService, private router: Router) {
  }

  ngOnInit() {
    this.categories = this.categoriesServise.getCategories();
  }

  chooseCategory(category) {
    this.router.navigate([`/category/${category.name.toLowerCase()}`]);
  }

}
