import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './client/client.module#ClientModule'
  },
  {
    path: 'admin', component: AdminComponent
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
