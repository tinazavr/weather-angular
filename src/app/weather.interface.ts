export interface Weather {
  city: string;
  country: string;
  date: any;
  time: string;

  temperature: {
    celsius : number;
    night: number;
    day: number;
  };

  wind: number;
  humidity: number;
  description: string;
  icon: string;
  coordLon?: number;
  coordLat?: number;
}
