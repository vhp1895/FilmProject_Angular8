import { Component, OnInit, HostListener } from '@angular/core';
import { ShareDataService } from 'src/app/_core/shared/share-data.service';
import { PreventBackService } from 'src/app/_core/shared/prevent-back.service';
import { BookingService } from 'src/app/_core/services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  focus: boolean = false;
  OrderDetails: any;
  SubTotalTix:any;
  SubTotalFnb: any;
  totalPrice: any;
  constructor(
    private shareDataService: ShareDataService,
    private preventBack: PreventBackService,
    private bookingService: BookingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.onRefresh();
    this.shareDataService.shareOrderDetail.subscribe(data => {
      if(Object.entries(data).length)
        this.OrderDetails = data;
      console.log(this.OrderDetails);
    })
    this.subTotal();
    this.preventBack.preventBackButton();
  }
  onRefresh() {
    this.OrderDetails = JSON.parse(localStorage.getItem('OrderDetails'));
    localStorage.removeItem('OrderDetails');
  }
  @HostListener('window:beforeunload', ['$event'])
  saveData() {
    if(this.router.url.includes('payment'))
      localStorage.setItem('OrderDetails', JSON.stringify(this.OrderDetails));
  }

  payment() {
    this.focus = true;
    this.bookingService.PaymentMethod.emit(true);
  }

  subTotal() {
    let subTotalTix = 0;
    let subTotalFnb = 0;
    this.OrderDetails.selectedTicketInfo.forEach(item => {
      subTotalTix += item.price * item.qty;
    })
    this.SubTotalTix = subTotalTix;
    this.OrderDetails.selectedFnbInfo.forEach(item => {
      subTotalFnb += item.price * item.qty;
    })
    this.SubTotalFnb = subTotalFnb;
    this.totalPrice = this.SubTotalFnb + this.SubTotalTix;
  }

}
