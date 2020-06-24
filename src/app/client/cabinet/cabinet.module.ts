import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CabinetRoutingModule} from './cabinet-routing.module';
import { AllnewsComponent } from './allnews/allnews.component';
import { BestnewsComponent } from './bestnews/bestnews.component';
import {CabinetComponent} from './cabinet.component';
import {Player} from "../player/player.component"
@NgModule({
  imports: [
    CommonModule,
    CabinetRoutingModule
  ],
  declarations: [CabinetComponent, AllnewsComponent, BestnewsComponent, Player]
})
export class CabinetModule {
}
