import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  weather: Weather | undefined;
  constructor(private weatherService: WeatherService) {}
  search(city: string) {
    this.weatherService
      .getWeather(city)
      .subscribe((data) => (this.weather = data));
  }
}
