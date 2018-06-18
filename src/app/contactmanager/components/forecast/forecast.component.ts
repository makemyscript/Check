import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  constructor(private weatherService: UserService) { }

  forecastForm:FormGroup;
  forecast:User[]=[];

  ngOnInit() {
    this.forecastForm = new FormGroup({
      forecastCity: new FormControl('')
    });
  }
  
  onSubmit(){
    this.forecast.splice(0, this.forecast.length);
    this.weatherService.forecast(this.forecastForm.value.forecastCity).subscribe(
      (data) =>{
        for(let i=0; i<data.list.length;i= i+8){
          const forecastWeather = new User(data.city.name,
                                                data.list[i].weather[0].description,
                                                data.list[i].main.temp,
                                                data.list[i].dt_txt,
                                                data.list[i].weather[0].icon);
          // console.log(forecastWeather);
          this.forecast.push(forecastWeather);
        }
        return this.forecast;
      }
    )
  }

}
