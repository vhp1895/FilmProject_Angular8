import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  promoList1 = [
    {Title: "Ten Ten Ten", Subtitle: "Look at what you can get for just RM10!", HinhAnh: "assets/images/home/promotion/promotion1-1.jpeg"},
    {Title: "Angel Has Fallen MovieClub Exclusive Contest ", Subtitle: "Stand a chance to win a Parrot Disco FPV Drone worth RM6,600.", HinhAnh: "assets/images/home/promotion/promotion1-2.png"},
  ];
  promoList2 = [
    {Title: "Quench your thirst with Pepsi Vanilla!", Subtitle: "Redeem a bottle with 100 MovieMoney. ", HinhAnh: "assets/images/home/promotion/promotion2-1.jpeg"},
    {Title: "Hakuna Matata, Disney The Lion King Combo is here! ", Subtitle: "Get these limited edition tumblers and be worry-free for the rest of your days.", HinhAnh: "assets/images/home/promotion/promotion2-2.jpeg"},
    {Title: "The Spider-Man Combo is close to home!", Subtitle: "Get your friendly neighbourhood Spider-Man Tumbler today! ", HinhAnh: "assets/images/home/promotion/promotion2-3.jpeg"}
  ];
  constructor() { }

  getList(number) {
    if(number === 1)
      return this.promoList1;
    else if (number === 2)
      return this.promoList2;
  }

}
