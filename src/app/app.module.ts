import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherService } from './shared/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
