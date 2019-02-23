import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CabinetComponent} from './cabinet.component';
import {AllnewsComponent} from './allnews/allnews.component';
import {BestnewsComponent} from './bestnews/bestnews.component';

const routes: Routes = [
    {
      path: '', component: CabinetComponent,
      children: [
        {path: 'two', component: BestnewsComponent},
        {
          path: 'rod', component: AllnewsComponent
        }
      ]
    }
  ]
;

export const CabinetRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
