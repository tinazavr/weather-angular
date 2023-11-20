import { Component, inject, Input } from '@angular/core';
import { WeatherResponse } from './weather-response.interface';

import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //weatherService: WeatherService = inject(WeatherService);
  someName: WeatherService = inject(WeatherService);
  //cityData: Weather;
  loadDataForCity(city: string): void {
    //console.log(city);
    this.someName.getData(city).subscribe((data: any) => {
       console.log(data);
     });
    // this.weatherService.getData().subscribe((data: WeatherResponse) => {
    //   console.log(data);
    // });
  }

  constructor() {}
}
