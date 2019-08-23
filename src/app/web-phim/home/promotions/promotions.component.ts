import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PromotionService } from 'src/app/_core/services/promotion.service';


@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  promoList1 = [];
  promoList2 = [];
    
  constructor(
    private promotionService: PromotionService
  ) { }

  ngOnInit() {
    this.promoList1 = this.promotionService.getList(1);
    this.promoList2 = this.promotionService.getList(2);
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    navText: ['',''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }
}
