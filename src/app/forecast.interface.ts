export interface Forecast {
  date: number;
  //city: string;
  // latitude: number;
  // longitude: number;
  temperatureInCelsius: {
    night: number;
    day: number;
  };
  humidity: number;
  icon: {
    day: string[],
    night: string[],
  };
}
