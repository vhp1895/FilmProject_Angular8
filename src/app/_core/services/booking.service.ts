import { Injectable, Output, EventEmitter } from '@angular/core';
import { FoodItemComponent } from 'src/app/web-phim/booking-detail/food/food-item/food-item.component';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  @Output() FoodItem = new EventEmitter();
  @Output() PaymentMethod = new EventEmitter();
  @Output() selectingSeat = new EventEmitter();
  foodTabLists = [
    {
      type: "F&B",
      foodList: [
        {
          name: "Star Combo",
          img: "assets/images/bookingflow/fnb/star-combo.png",
          price: 40000,
          describe: [
            "1 Large Hollywood Popcorn",
            "1 Confectionery",
            "2 Regular Soft Drinks or Mineral Water",
            "Normal Price: 50.000 VND",
            "Save: 10.000 VND"
          ]
        },
        {
          name: "Double Deal Combo",
          img: "assets/images/bookingflow/fnb/double-deal-combo.png",
          price: 50000,
          describe: [
            "1 Large Hollywood Popcorn",
            "1 Confectionery",
            "2 Regular Soft Drinks or Mineral Water",
            "Normal Price: 70.000 VND",
            "Save: 20.000 VND"
          ]
        },
        {
          name: "Super Saver Combo",
          img: "assets/images/bookingflow/fnb/super-saver-combo.jpeg",
          price: 60000,
          describe: [
            "2 Large Hollywood Popcorn",
            "2 Hollywood Hotties",
            "6 Regular Soft Drinks or Mineral Water",
            "Normal Price: 90.000 VND",
            "Save: 30.000 VND"
          ]
        }
      ]
    }
  ]
  constructor() { }

  getFoodTabList() {
    return this.foodTabLists;
  }
}
