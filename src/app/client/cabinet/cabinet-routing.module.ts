import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CabinetComponent} from './cabinet.component';

const routes: Routes = [
  {
    path: '', component: CabinetComponent
  }
];

export const CabinetRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
