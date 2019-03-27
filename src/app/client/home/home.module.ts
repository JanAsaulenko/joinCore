import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {AnchorComponent} from './anchor/anchor.component';
import {CategoriesBlockComponent} from './categories-block/categories-block.component';
import {PointerCityComponent} from './pointer-city/pointer-city.component';
import {SearchComponent} from './search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FeedbacksComponent} from './main/feedbacks/feedbacks.component';
import {CategoryComponent} from './main/category/category.component';
import { CategoriesListComponent } from './categories-block/categories-list/categories-list.component';
import { CategoryItemComponent } from './categories-block/category-item/category-item.component';
import {HomeComponent} from './home.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HomeRoutingModule
  ],
  declarations: [ HomeComponent, FeedbacksComponent, AnchorComponent, CategoriesBlockComponent, PointerCityComponent,
    PointerCityComponent, SearchComponent, CategoryComponent, CategoriesListComponent, CategoryItemComponent]
})
export class HomeModule {
}
