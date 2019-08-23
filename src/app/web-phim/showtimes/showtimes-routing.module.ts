import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowtimesComponent } from './showtimes.component';

const routes: Routes = [
  {
    path: "", component: ShowtimesComponent, children: [
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowtimesRoutingModule { }
