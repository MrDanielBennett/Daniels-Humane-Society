import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdoptComponent} from './adopt/adopt.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'adopt',
    component: AdoptComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
