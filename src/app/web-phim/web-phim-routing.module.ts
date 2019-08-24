import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebPhimComponent } from './web-phim.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './form/register/register.component';
import { SigninComponent } from './form/signin/signin.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { FormModule } from './form/form.module';
import { BookingDetailModule } from './booking-detail/booking-detail.module';
import { IsLoginGuard } from '../_core/guards/is-login.guard';
import { ShowtimesModule } from './showtimes/showtimes.module';
import { MoviesModule } from './movies/movies.module';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: "", component: WebPhimComponent, children: [
      { path: "",loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

      {
        path: "booking-detail", loadChildren: () => import('./booking-detail/booking-detail.module').then(m => m.BookingDetailModule),
        canActivate: [IsLoginGuard]
      },
      { path: "account", loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
      { path: "movies", loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
      { path: "showtimes", loadChildren: () => import('./showtimes/showtimes.module').then(m => m.ShowtimesModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebPhimRoutingModule { }
