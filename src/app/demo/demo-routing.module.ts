import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlecboxComponent } from './flecbox/flecbox.component';

const routes: Routes = [
  {path: 'buttons', component: ButtonsComponent},
  {path: 'flexbox', component: FlecboxComponent},
  {path: '**', redirectTo: 'flexbox' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
