import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiKey } from '../open-weather-map-token';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  httpClient: HttpClient = inject(HttpClient);
  units = 'metric';
  apiKey = apiKey;

  getData(city: string) {
    console.log(city);
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=${this.units}`;

    return this.httpClient.get<any>(link);
  }
}
