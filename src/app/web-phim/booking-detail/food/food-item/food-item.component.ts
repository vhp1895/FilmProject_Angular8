import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { BookingService } from 'src/app/_core/services/booking.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit {
  @Input() FoodItem;
  quantity: number = 0;
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    console.log(this.FoodItem);
  }
  changeQty(changeStatus) {
    if(changeStatus) 
      this.quantity += 1;
    else
      if (this.quantity > 0)
        this.quantity -= 1;
    
    let objFood = {
      qty : this.quantity,
      name: this.FoodItem.name,
      price: this.FoodItem.price
    }
    this.bookingService.FoodItem.emit(objFood);
  }
}
