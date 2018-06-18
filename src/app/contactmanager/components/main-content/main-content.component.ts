import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note';
import { UserService } from '../../../shared/user.service';
import 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  
  weather:Note;
  constructor(private weatherService: UserService, private route: ActivatedRoute) { }
  
  //htnkl

  ngOnInit() {
    this.route.data.subscribe(
      (data:{weather:Note})=>{
        this.weather = data.weather;
      }
    )
  }

  onSubmit(weatherForm: NgForm){
    console.log(weatherForm.value.cityName);
    this.weatherService.byCity(weatherForm.value.cityName).subscribe(
      (data)=>{
        this.weather = new Note(data.name,
                                data.main.temp,
                                data.weather[0].icon,
                                data.weather[0].description,
                                data.main.temp_max,
                                data.main.temp_min)
      }
    )
  }

}
