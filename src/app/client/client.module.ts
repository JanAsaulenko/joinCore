import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';
import {CommonModule} from '@angular/common';
import {ClientRoutingModule} from './client-routing.module';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HomeComponent} from './home/home.component';
import {AuthComponent} from './auth/auth.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FeedbacksComponent} from './home/main/feedbacks/feedbacks.component';
import {SearchComponent} from './home/search/search.component';
import {AnchorComponent} from './home/anchor/anchor.component';
import {PointerCityComponent} from './home/pointer-city/pointer-city.component';
import {CategoryComponent} from './home/main/category/category.component';
import { CategoriesBlockComponent } from './home/categories-block/categories-block.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientRoutingModule
  ],
  declarations: [MainComponent, HeaderComponent, FooterComponent, HomeComponent,
    AuthComponent, RegistrationComponent, FeedbacksComponent, SearchComponent, AnchorComponent, PointerCityComponent,
  CategoryComponent,
  CategoriesBlockComponent]
})
export class ClientModule {
}
