import { Component, inject, Input, OnInit } from '@angular/core';
import { WeatherResponse } from './weather-response.interface';

import { WeatherService } from './services/weather.service';
import { Weather } from './weather.interface';
import { Forecast } from './forecast.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dataForCity: Weather | null = null;
  forecast: Forecast[] = [];
  weatherService: WeatherService = inject(WeatherService);

  loadDataForCity(city: string): void {
    this.weatherService.getDataForCity(city).subscribe((data: any) => {
      this.dataForCity = {
        city: data.name,
        country: data.sys.country,
        date: data.dt * 1000,
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        temperature: {
          celsius: Math.round(data.main.temp),
          night: Math.round(data.main.temp_min),
          day: Math.round(data.main.temp_max),
        },
        wind: Math.round(data.wind.speed),
        humidity: data.main.humidity,
        description:
          data.weather[0].description.charAt(0).toUpperCase() +
          data.weather[0].description.slice(1),
        icon: data.weather[0].icon,
      };
    });
  }
  ngOnInit(): void {
    this.loadDataForCity('Polohy');
  }
  constructor() {}
}
