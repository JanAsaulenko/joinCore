import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {MainComponent} from './main/main.component';

const aboutRoutes: Routes = [
  {
    path: '', component: MainComponent,
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'cabinet', component: MainComponent,
    canActivate: [AuthGuard],
    loadChildren: './cabinet/cabinet.module#CabinetModule'
  }
];


export const ClientRoutingModule: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
