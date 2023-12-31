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

  getDataForCity(city: string) {
    console.log(city);
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=${this.units}`;
    // ling for current position: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    return this.httpClient.get<any>(link);
  }
  // getForecastForLocation(latitude: number, longitude: number) {
  //       let link = `https://api.openweathermap.org/data/2.5/opencall?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=${this.units}`;
  //   //let link = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=daily&appid=${this.apiKey}&units=${this.units}`;
  //   return this.httpClient.get<any>(link);
  // }
}
