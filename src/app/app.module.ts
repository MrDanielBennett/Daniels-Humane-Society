import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { AdoptComponent } from './adopt/adopt.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { DonateComponent } from './donate/donate.component';
import { ReportCrueltyComponent } from './report-cruelty/report-cruelty.component';
import { TrainingComponent } from './training/training.component';
import { ServicesComponent } from './services/services.component';
import { VisitUsComponent } from './visit-us/visit-us.component';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};



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
    VisitUsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
