import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { AdoptComponent } from './adopt/adopt.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { DonateComponent } from './donate/donate.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdoptComponent,
    GetInvolvedComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
