import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './guards/auth.guard';

const aboutRoutes: Routes = [
    {
      path: '', component: MainComponent,
      children: [
        {
          path: 'cabinet',
          canActivate: [AuthGuard],
          loadChildren: './cabinet/cabinet.module#CabinetModule'
        },
        {
          path: '', component: HomeComponent
          //    loadChildren: './home/home.module#HomeRoutingModule'
        }
      ]
    }
  ]
;

export const ClientRoutingModule: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
