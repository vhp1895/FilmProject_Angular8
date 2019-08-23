import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowtimesComponent } from './showtimes.component';
import { ShowtimesRoutingModule } from './showtimes-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MaterialModule } from 'src/app/_core/shared/material.module';
import { ShareModule } from 'src/app/_core/shared/share.module';



@NgModule({
  declarations: [ShowtimesComponent],
  imports: [
    CommonModule,
    ShowtimesRoutingModule,
    SlickCarouselModule,
    MaterialModule,
    ShareModule
  ]
})
export class ShowtimesModule { }
