import { Component, OnInit, Input } from '@angular/core';
import { BookingService } from 'src/app/_core/services/booking.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  @Input() seatInput;
  selectingStatus: boolean = false;
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    if(this.seatInput.loaiGhe === "Thuong") {
      this.seatInput.loaiGhe = "Classic";
    }
    let stt = parseInt(this.seatInput.stt);
    let basedOnNumber = Math.trunc((stt - 1) / 16);
    let letterPart = String.fromCharCode(65 + basedOnNumber);
    let numberPart = this.pad(stt % 16);
    numberPart = numberPart === "00"? 16 : numberPart;
    this.seatInput.tenGhe = letterPart + numberPart;
  }
  pad(n) {
    return (n < 10) ? ("0" + n) : n;
  }
  select() {
    this.selectingStatus = !this.selectingStatus;
    let selectingSeat:any = {
      maGhe: this.seatInput.maGhe,
      giaVe:this.seatInput.giaVe,
      seatType:this.seatInput.loaiGhe,
      seatName:this.seatInput.tenGhe,
      selectingStatus:this.selectingStatus
    }
    this.bookingService.selectingSeat.emit(selectingSeat);
  }
}
