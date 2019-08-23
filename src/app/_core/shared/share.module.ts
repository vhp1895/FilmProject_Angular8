import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPhimComponent } from 'src/app/components/modal-phim/modal-phim.component';
import { SafePipeModule } from 'safe-pipe';
import { MovieItemComponent } from 'src/app/components/movie-item/movie-item.component';
import { ShowDateRowComponent } from 'src/app/components/show-date-row/show-date-row.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MovieTypeComponent } from 'src/app/components/movie-type/movie-type.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ButtonShowtimeComponent } from 'src/app/components/button-showtime/button-showtime.component';
import { Button } from 'protractor';
@NgModule({
  declarations: [ModalPhimComponent, MovieItemComponent, ShowDateRowComponent, MovieTypeComponent, ButtonShowtimeComponent],
  imports: [
    CommonModule,
    SafePipeModule,
    SlickCarouselModule,
    CarouselModule
  ],
  exports: [ModalPhimComponent, MovieItemComponent, ShowDateRowComponent, MovieTypeComponent, ButtonShowtimeComponent]
})
export class ShareModule { }
