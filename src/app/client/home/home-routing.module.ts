import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CategoriesListComponent} from './categories-block/categories-list/categories-list.component';
import {CategoryItemComponent} from './categories-block/category-item/category-item.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: 'category/:name', component: CategoriesListComponent},
      {path: 'category:/rooms:/id', component: CategoryItemComponent},
    ]
  }
];
export const HomeRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
