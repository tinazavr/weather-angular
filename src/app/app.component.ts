import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() cityData;

  getData(city: string): void {
    this.cityData = {cityName: city};
  }
  constructor(){

  }
}
