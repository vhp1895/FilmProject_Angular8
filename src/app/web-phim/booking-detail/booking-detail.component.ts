import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ShareDataService } from 'src/app/_core/shared/share-data.service';
import { DataService } from 'src/app/_core/services/data.service';
import * as $ from 'jquery';
import { BookingService } from 'src/app/_core/services/booking.service';
import { BookingInfo } from 'src/app/_core/models/booking-info';
import { LocationStrategy } from '@angular/common';
import { PreventBackService } from 'src/app/_core/shared/prevent-back.service';
import { MovieService } from 'src/app/_core/services/movie.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit, OnDestroy {
  subParam: Subscription;
  subService_1: Subscription;
  subService_2: Subscription;
  subService_3: Subscription;
  subService_4: Subscription;
  subService_5: Subscription;
  hallInfo: any;
  showtimeCode: any;
  listSelectingSeat: any[] = []; //retain on refresh exclude seats page
  totalPrice: number = 0; // retain on refresh exclude seats
  orderDetails = {
    selectedTicketInfo: [],
    selectedFnbInfo: []
  } // retain on refresh exclude seats

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private shareDataService: ShareDataService,
    private dataService: DataService,
    private bookingService: BookingService,
    private preventBack: PreventBackService,
    private movieService: MovieService) { }

  ngOnInit() {
    this.onRefresh();
    this.getParams();
    this.bookSeat();
    this.orderFood();
    this.confirmPaymentMethod();
    this.preventBack.preventBackButton();
    $(document.body).addClass('booking');
    console.log(this.showtimeCode)
  }
  onRefresh() {
    if(localStorage.getItem('showtimeCode')) {
      this.showtimeCode = JSON.parse(localStorage.getItem('showtimeCode'));
      localStorage.removeItem('showtimeCode');
      console.log('after', this.showtimeCode)
    }
    
    if(localStorage.getItem('hallInfo')) {
      this.hallInfo = JSON.parse(localStorage.getItem('hallInfo'));
      console.log('refreshed', this.hallInfo);
      localStorage.removeItem('hallInfo');
    }


    if (!this.router.url.includes('seats')) {
      this.listSelectingSeat = JSON.parse(localStorage.getItem('listSelectingSeat'));
      localStorage.removeItem('listSelectingSeat');

      this.orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
      localStorage.removeItem('orderDetails');

      this.getTotalPrice();
    }
  }
  @HostListener('window:beforeunload', ['$event'])
  saveData() {
    if(this.showtimeCode)
      localStorage.setItem('showtimeCode', JSON.stringify(this.showtimeCode));
    if(this.hallInfo)
    localStorage.setItem('hallInfo', JSON.stringify(this.hallInfo));

    if (!this.router.url.includes('seats')) {
      localStorage.setItem('listSelectingSeat', JSON.stringify(this.listSelectingSeat));
      if (this.router.url.includes('fnb')) {
        this.orderDetails.selectedFnbInfo = [];
        localStorage.setItem('orderDetails', JSON.stringify(this.orderDetails));
      } else {
        localStorage.setItem('orderDetails', JSON.stringify(this.orderDetails));
      }
    }
  }


  getParams() {
    this.subParam = this.activatedRoute.queryParams.subscribe(params => {
      if (Object.entries(params).length) {
        this.showtimeCode = params.code;
        this.getHallInfo();
      }
    })

  }

  getHallInfo() {
    const uri = `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${this.showtimeCode}`;
    this.subService_1 = this.dataService.get(uri).subscribe(hallInfo_1 => {
      console.log(hallInfo_1);
      this.shareDataService.sharingSeatList(hallInfo_1.danhSachGhe);
      this.subService_5 = this.shareDataService.shareHallInfo.subscribe(hallInfo_2 => {
        if (Object.entries(hallInfo_2).length) {
          this.hallInfo = hallInfo_2;
          this.hallInfo.hallName = hallInfo_1.tenRap;
        }
      })
    })
  }

  bookSeat() {
    this.subService_2 = this.bookingService.selectingSeat.subscribe(selectingSeat => {
      if (selectingSeat.selectingStatus) {
        this.listSelectingSeat.push(selectingSeat);
        this.addTicket(selectingSeat);
      } else {
        let index = this.listSelectingSeat.findIndex(seat => seat.maGhe === selectingSeat.maGhe);
        if (index !== -1) {
          this.listSelectingSeat.splice(index, 1);
        }
        this.removeTicket(selectingSeat);
      }
      console.log('mảng ghế đang đặt', this.listSelectingSeat);
      console.log(this.orderDetails.selectedTicketInfo);
      this.getTotalPrice();
    })
  }

  addTicket(seat) {
    const ticketInfo = this.orderDetails.selectedTicketInfo;
    let index = ticketInfo.findIndex(item => item.seatType === seat.seatType)
    if (index !== -1)
      ticketInfo[index].qty += 1;
    else {
      ticketInfo.push({
        seatType: seat.seatType,
        qty: 1,
        price: seat.price
      })
    }
  }
  removeTicket(seat) {
    const ticketInfo = this.orderDetails.selectedTicketInfo;
    let index = ticketInfo.findIndex(item => item.seatType === seat.seatType);
    ticketInfo[index].qty -= 1;
    if (!ticketInfo[index].qty)
      ticketInfo.splice(index, 1);
  }
  orderFood() {
    const fnbInfo = this.orderDetails.selectedFnbInfo;
    this.subService_3 = this.bookingService.FoodItem.subscribe(fItem => {
      let index = fnbInfo.findIndex(item => item.name === fItem.name)
      if (index === -1) {
        fnbInfo.push(fItem)
      } else {
        fnbInfo[index] = fItem;
        if (!fnbInfo[index].qty)
          fnbInfo.splice(index, 1);
      }
      this.getTotalPrice();
    })
  }

  getTotalPrice() {
    let tix_subTotal = 0;
    let fnb_subTotal = 0;
    this.listSelectingSeat.forEach(seat => {
      tix_subTotal += seat.giaVe;
    })
    this.orderDetails.selectedFnbInfo.forEach(fItem => {
      fnb_subTotal += fItem.qty * fItem.giaVe;
    })
    this.totalPrice = tix_subTotal + fnb_subTotal;

  }

  confirmPaymentMethod() {
    this.bookingService.PaymentMethod.subscribe(data => {
      console.log('this true or not', data);
      if (data) {
        $('button.butn').prop('disabled', false);
        console.log('true ok')
      }
    })
  }

  bookingFlow() {
    let abc = {
      maLichChieu: 16000,
      danhSachVe: [
        {
          maGhe: 49641,
          giaVe: 75000
        }
      ],
      taiKhoanNguoiDung: "phucknmk@gmail.com"
    }
    if (this.router.url.includes('seats')) {
      this.router.navigate([`/booking-detail/fnb`]);
    } else if (this.router.url.includes('fnb')) {
      this.router.navigate([`/booking-detail/payment`]);
      this.shareDataService.sharingOrderDetail(this.orderDetails);
    } else if (this.router.url.includes('payment')) {
      const userLogin = JSON.parse(localStorage.getItem('user'));
      let tixInfo = new BookingInfo(parseInt(this.showtimeCode), userLogin.taiKhoan);
      tixInfo.danhSachVe = this.listSelectingSeat;
      const uri = "QuanLyDatVe/DatVe";
      this.subService_4 = this.dataService.bookTix(uri, tixInfo).subscribe(() => {
        Swal.fire({
          toast: true,
          type: 'success',
          timer: 2000,
          title: 'Booking Succeed!',
          position: 'center',
          showConfirmButton: false
        })
        setTimeout(() => {window.location.href = "/"}, 2000);
      })
    }
  }
  ngOnDestroy() {
    this.subParam.unsubscribe();
    this.subService_1.unsubscribe();
    this.subService_2.unsubscribe();
    this.subService_3.unsubscribe();
    this.subService_4.unsubscribe();
    this.subService_5.unsubscribe();
  }
}