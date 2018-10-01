import { TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { CitySearchComponent } from './city-search/city-search.component';

describe('AppComponent', () => { beforeEach(async(() => { 
  TestBed.configureTestingModule({
      imports: [ 
        BrowserModule, 
        HttpClientTestingModule, 
        FormsModule, 
        ReactiveFormsModule,
      ],
      declarations: [
        AppComponent,
        CurrentWeatherComponent,
        CitySearchComponent
      ],
    }).compileComponents();
    }));
    
    it('should create the app', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }));
});
