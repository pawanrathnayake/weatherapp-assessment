import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

const routes: Routes = [
  {path:'weatherdetails', component:WeatherDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
