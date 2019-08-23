import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDetailComponent } from "./booking-detail.component";
import { SeatsComponent } from './seats/seats.component';
import { BookingDetailRoutingModule } from './booking-detail-routing.module';
import { SeatComponent } from './seats/seat/seat.component';
import { FoodComponent } from './food/food.component';
import { FoodItemComponent } from './food/food-item/food-item.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [BookingDetailComponent, SeatsComponent, SeatComponent, FoodComponent, FoodItemComponent, PaymentComponent],
  imports: [
    CommonModule,
    BookingDetailRoutingModule
  ]
})
export class BookingDetailModule { }
