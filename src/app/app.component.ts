import { Component, inject, Input, OnInit } from '@angular/core';
import { WeatherResponse } from './weather-response.interface';

import { WeatherService } from './services/weather.service';
import { Weather } from './weather.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dataForCity: Weather | null = null;

  weatherService: WeatherService = inject(WeatherService);

  loadDataForCity(city: string): void {
    this.weatherService.getData(city).subscribe((data: any) => {
      console.log(data);
      let dateNumber = new Date(data.dt * 1000);
      console.log(dateNumber);
      this.dataForCity = {
        city: data.name,
        country: data.sys.country,
        date: this.formattedDate(dateNumber),
        time: this.formattedTime(dateNumber),

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
      console.log(this.dataForCity);
    });
  }
  formattedTime(date: any) {
    console.log(date);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let result = `${hours}:${minutes}`;
    if (minutes < 10){
      return `0+${minutes}`;
    }
    if (hours < 10) {
      return `0+${hours}`;
    }
    return result;
  }

  formattedDate(date: any) {
    let daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednsday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let namesOfMonths = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let numberOfDay = date.getDate();
    let day = daysOfWeek[date.getDay()];
    let month = namesOfMonths[date.getMonth()];
    let result = `${day}, ${numberOfDay} ${month}`;
    return result;
  }
  ngOnInit(): void {
    this.loadDataForCity('Polohy');
  }
  constructor() {}
}
