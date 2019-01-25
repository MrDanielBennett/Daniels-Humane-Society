import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdoptComponent} from './adopt/adopt.component';
import { GetInvolvedComponent} from './get-involved/get-involved.component'
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'adopt',
    component: AdoptComponent
  },
  {
    path: 'get-involved',
    component: GetInvolvedComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
