import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';
import {CommonModule} from '@angular/common';
import {ClientRoutingModule} from './client-routing.module';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {CabinetComponent} from './cabinet/cabinet.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  declarations: [MainComponent, HeaderComponent, FooterComponent, CabinetComponent, HomeComponent]
})
export class ClientModule {
}
