export interface Weather {
  city: string;
  country: string;
  date: number;
  latitude: number;
  longitude: number;
  temperature: {
    celsius: number;
    night: number;
    day: number;
  };

  wind: number;
  humidity: number;
  description: string;
  icon: string;

}
