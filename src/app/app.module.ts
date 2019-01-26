import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { AdoptComponent } from './adopt/adopt.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { DonateComponent } from './donate/donate.component';
import { ReportCrueltyComponent } from './report-cruelty/report-cruelty.component';
import { TrainingComponent } from './training/training.component';
import { ServicesComponent } from './services/services.component';
import { VistUsComponent } from './vist-us/vist-us.component';
import { VisitUsComponent } from './visit-us/visit-us.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdoptComponent,
    GetInvolvedComponent,
    DonateComponent,
    ReportCrueltyComponent,
    TrainingComponent,
    ServicesComponent,
    VistUsComponent,
    VisitUsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
