import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdoptComponent} from './adopt/adopt.component';
import { GetInvolvedComponent} from './get-involved/get-involved.component'
import { DonateComponent} from './donate/donate.component';
import { ReportCrueltyComponent} from './report-cruelty/report-cruelty.component';
import { TrainingComponent} from './training/training.component';
import { ServicesComponent} from './services/services.component';
import { VisitUsComponent} from './visit-us/visit-us.component';


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
  },
  {
    path: 'donate',
    component: DonateComponent
  },
  {
    path: 'report-cruelty',
    component: ReportCrueltyComponent
  },
  {
    path: 'training',
    component: TrainingComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'visit-us',
    component: VisitUsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
