import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Routes, RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { UserService } from './shared/user.service';
import { ResolverService } from './shared/resolver.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule', resolve: {weather: ResolverService}},
  {path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
  {path: '**', redirectTo: 'contactmanager'}
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule
  ],
  providers: [UserService, ResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
