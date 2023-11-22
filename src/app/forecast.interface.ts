export interface Forecast {
  day: string;
  //city: string;
  // latitude: number;
  // longitude: number;
  temperatureInCelsius: {
    night: number;
    day: number;
  };
  humidity: number;
  icon: string[];
}
