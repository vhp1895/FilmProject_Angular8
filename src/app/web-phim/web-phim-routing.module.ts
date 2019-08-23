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
      { path: "",loadChildren: () => HomeModule },

      {
        path: "booking-detail", loadChildren: () => BookingDetailModule,
        canActivate: [IsLoginGuard]
      },
      { path: "account", loadChildren: () => FormModule },
      { path: "movies", loadChildren: () => MoviesModule },
      { path: "showtimes", loadChildren: () => ShowtimesModule },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebPhimRoutingModule { }
