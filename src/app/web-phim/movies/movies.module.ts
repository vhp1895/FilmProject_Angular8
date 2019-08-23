import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';

import { ShareModule } from 'src/app/_core/shared/share.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MaterialModule } from 'src/app/_core/shared/material.module';
import { MovieListComponent } from './movie-list/movie-list.component';



@NgModule({
  declarations: [MoviesComponent, MovieDetailComponent, MovieListComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ShareModule,
    SlickCarouselModule,
    MaterialModule
  ]
})
export class MoviesModule { }
