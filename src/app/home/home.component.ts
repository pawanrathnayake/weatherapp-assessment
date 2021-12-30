import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../shared/weather.service";
import { forkJoin } from 'rxjs/internal/observable/forkJoin';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public data: any;
  public weather: any;

  constructor(private weatherService:WeatherService) {

  }

  ngOnInit() {   
    this.weatherService.getJsonData('./assets/cities.json').subscribe(data => {
            this.data = data;         //Reading JSON Data
            this.getWeatherList();    //Calling GetWeatherList Function
      }); 
  }

  getWeatherList(){
    if (this.data) {

      // console.log(this.data);
      
      const dataList = this.data.List;
      let tempArr : any = [];

      for (let temp of dataList) {
        this.weatherService.getWeather(temp.CityCode).subscribe((Response: any) => {
          tempArr.push(Response.list[0]);         //Pushing Response to Array
        })        
      }
      console.log(tempArr)
      this.weather = tempArr;   //Assigning Array to Weather Constant
    }
  }
 
}  


