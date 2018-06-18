import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';

import { MaterialModule } from '../shared/material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ChartComponent } from './components/chart/chart.component';
import { ProfilesComponent } from './components/profiles/profiles.component';

const routes: Routes = [
  {path: '', component: ContactmanagerAppComponent,
    children: [
      {path: '',component: MainContentComponent},
      {path: 'forecast', component: ForecastComponent},
      {path: 'chart', component: ChartComponent},
      {path: 'about', component: ProfilesComponent}
    ]
  },
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactmanagerAppComponent, ToolbarComponent, SidenavComponent, MainContentComponent, ForecastComponent, ChartComponent, ProfilesComponent]
})
export class ContactmanagerModule { }
