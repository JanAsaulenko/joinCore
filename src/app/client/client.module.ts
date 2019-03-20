import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';
import {CommonModule} from '@angular/common';
import {ClientRoutingModule} from './client-routing.module';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {AuthComponent} from './auth/auth.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientRoutingModule
  ],
  declarations: [MainComponent, HeaderComponent, FooterComponent,
    AuthComponent, RegistrationComponent]
})
export class ClientModule {
}
