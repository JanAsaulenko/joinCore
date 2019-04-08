import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public categories = [{name: 'Rooms'}, {name: 'Amusements'}];

  constructor() {
  }

  getCategories() {
    return this.categories ;
  }
}
