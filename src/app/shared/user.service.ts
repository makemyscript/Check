import { Injectable } from '@angular/core';
import { Note } from '../contactmanager/models/note';
import { Http,Response } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  weather: Note;
  location
  constructor(private http: Http, private _http: HttpClient) { }


  /*local(lat:number, lon:number){
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=c072b5a32bcaa215267018db1977b7ed&units=imperial")
    .map((response:Response) => response.json());
  }*/

  local(){
    return new Promise((res,rej)=>{
      navigator.geolocation.getCurrentPosition((pos)=>{
        this.location = pos.coords;
        const lat = this.location.latitude;
        const lon = this.location.longitude;
        return this.http.get("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=c072b5a32bcaa215267018db1977b7ed&units=metric")
        .map((response:Response) => response.json()).toPromise().then(
          (data)=>{
            this.weather = new Note(data.name,
                                data.main.temp,
                                data.weather[0].icon,
                                data.weather[0].description,
                                data.main.temp_max,
                                data.main.temp_min
            );
            res(this.weather);
          }
        )
      })
    })
  }

  byCity(city: string){
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=c072b5a32bcaa215267018db1977b7ed&units=metric")
    .map((response: Response)=> response.json());
  }

  forecast(city:string){
    return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=c072b5a32bcaa215267018db1977b7ed&units=metric")
    .map((response:Response)=> response.json())
  }

  daily(city:string){
    return this._http.get("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=c072b5a32bcaa215267018db1977b7ed&units=metric")
    .map(result=>result);
  }
}
