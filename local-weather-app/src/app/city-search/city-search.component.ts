import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { WeatherService } from '../weather/weather.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  search = new FormControl('', [Validators.minLength(3)])

  @Output() searchEvent = new EventEmitter<string>();

  constructor(private weatherService: WeatherService) {    
  }

  getErrorMessage(){
    console.log(this.search.errors);
    return this.search.hasError('minLength') ? 'Minimum characters' : ''
  }

  ngOnInit() {
    this.search.valueChanges 
    .subscribe((searchValue: string) => {
      if (!this.search.invalid) {
        const userInput = searchValue.split(',')
        .map(s => s.trim());
        this.weatherService.getCurrentWeather(userInput[0],
        userInput.length > 1 ? userInput[1] : undefined)
        .pipe (debounceTime(1000))
        .subscribe(data => console.log(data));

      }
    })
  }
}
