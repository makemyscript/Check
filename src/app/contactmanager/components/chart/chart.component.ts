import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { Chart } from 'chart.js';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  chart = [];

  constructor(private weatherService: UserService) { }

  ngOnInit() {
    
  }

  onSubmit(weatherForm: NgForm){
    this.weatherService.daily(weatherForm.value.cityName).subscribe(
      res=> {
        let temp= res['list'].map(res=>res.main.temp)
        let specDate = res['list'].map(res=>res.dt)

        let weatherDates = []
        specDate.forEach((res)=>{
          let convDate = new Date(res*1000)
          weatherDates.push(convDate.toLocaleTimeString('en',{year: 'numeric', month: 'short', day:'numeric'}))
        })

        this.chart = new Chart('canvas',{
          type: 'line',
          data:{
            labels:weatherDates,
            datasets: [
              {
                data: temp,
                borderColor: '#3cba9f',
                fill: false
              }
            ]
          },
          options:{
            maintainAspectRatio: false,
            legend:{
              display: false
            },
            scales:{
              xAxes:[{
                display: true
              }],
              yAxes:[{
                display: true
              }]
            }
          }
        })
       

      }
    )
  }

}
