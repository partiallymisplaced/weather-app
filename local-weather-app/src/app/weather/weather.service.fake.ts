import { IWeatherService } from "./iweather-service";
import { ICurrentWeather } from "../icurrent-weather";
import { Observable, of } from "rxjs"; 

export class WeatherServiceFake implements IWeatherService {
    private fakeWeather: ICurrentWeather = {
        city: 'Seattle',
        country: 'US',
        date: 2022020202020,
        image: '',
        temperatureFahrenheit: -40,
        temperatureCelsius: -40,
        description: 'rain'
    }
    public getCurrentWeather(search: string | number, country?: string): Observable<ICurrentWeather>{
        return of(this.fakeWeather);
    }
}