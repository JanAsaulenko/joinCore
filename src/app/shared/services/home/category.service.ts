import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public categories = [{name: 'apartment'}, {name: 'houses'}];

  constructor() {
  }

  getCategories() {
    return this.categories;
  }
}
