import { Component, Input } from '@angular/core';
import { Forecast } from '../forecast.interface';
import { Weather } from '../weather.interface';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent {
  @Input() forecast!: Forecast;
}
