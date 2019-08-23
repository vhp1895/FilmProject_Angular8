import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/_core/services/booking.service';
import { PreventBackService } from 'src/app/_core/shared/prevent-back.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  foodTabList: any = [];
  constructor(
    private bookingService: BookingService,
    private preventBack: PreventBackService
  ) { }

  ngOnInit() {
    this.foodTabList = this.bookingService.getFoodTabList();
    console.log(this.foodTabList);
    this.preventBack.preventBackButton();
  }

}
