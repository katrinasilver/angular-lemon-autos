import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule // always last
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
