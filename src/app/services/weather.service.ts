import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey = '76df6c935cecde1de08d21993b13cead';
  constructor(private httpClient: HttpClient) {}

  getInformation(city: string) {
    this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
    );
  }
}
