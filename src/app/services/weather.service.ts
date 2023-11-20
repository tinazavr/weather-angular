import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {apiKey} from "../open-weather-map-token";
import { Weather } from '../weather.interface';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
 httpClient: HttpClient = inject(HttpClient);
units = "metric";
apiKey = apiKey;
city = 'Lviv';
 getData(){
  return this.httpClient.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=${this.units}`);
 }
}
