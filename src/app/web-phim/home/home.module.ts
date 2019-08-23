import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { QuickBookComponent } from './quick-book/quick-book.component';
import { SliderComponent } from './slider/slider.component';
import { MaterialModule } from 'src/app/_core/shared/material.module';
import {CarouselModule} from 'ngx-owl-carousel-o'
import { ShareModule } from 'src/app/_core/shared/share.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { PromoItemComponent } from './promotions/promo-item/promo-item.component';
import { SliderItemComponent } from './slider/slider-item/slider-item.component';


@NgModule({
  declarations: [HomeComponent, PromotionsComponent, QuickBookComponent, SliderComponent, PromoItemComponent, SliderItemComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CarouselModule,
    ShareModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
