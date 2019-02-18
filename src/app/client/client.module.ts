import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';
import {CommonModule} from '@angular/common';
import {ClientRoutingModule} from './client-routing.module';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {CabinetComponent} from './cabinet/cabinet.component';
import {HomeComponent} from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './auth/registration/registration.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  declarations: [MainComponent, HeaderComponent, FooterComponent, CabinetComponent, HomeComponent, AuthComponent, RegistrationComponent]
})
export class ClientModule {
}
