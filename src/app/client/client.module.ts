import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';
import {CommonModule} from '@angular/common';
import {ClientRoutingModule} from './client-routing.module';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HomeComponent} from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FeedbacksComponent } from './home/feedbacks/feedbacks.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientRoutingModule
  ],
  declarations: [MainComponent, HeaderComponent, FooterComponent, HomeComponent, AuthComponent, RegistrationComponent, FeedbacksComponent]
})
export class ClientModule {
}
