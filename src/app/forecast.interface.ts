export interface Forecast {
  date: number;

  temperature: {
    night: number;
    day: number;
  };
  humidity: number;
  icon : string;
  // icon: {
  //   day?: ['01d', '02d', '03d', '04d', '09d', '10d', '11d', '13d', '50d'];

  //   night?: ['01n', '02n', '03n', '04n', '09n', '10d', '11n', '13n', '50n'];
  // };

  // icon: {
  //   day: string[],
  //   night: string[],
  // };
}
