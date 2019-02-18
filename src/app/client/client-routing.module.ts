import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {CabinetComponent} from './cabinet/cabinet.component';
import {HomeComponent} from './home/home.component';

const aboutRoutes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'cabinet', component: CabinetComponent
      },
      {
        path: '', component: HomeComponent
      }
    ]
  }
];

export const ClientRoutingModule: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
