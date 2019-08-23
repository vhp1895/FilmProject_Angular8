import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookingInfo } from 'src/app/_core/models/booking-info';
import Swal from 'sweetalert2';
import { ShareDataService } from 'src/app/_core/shared/share-data.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {
  subService: Subscription;
  seatList: any;
  
  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.subService = this.shareDataService.shareSeatList.subscribe(seatList => {
      if(Object.entries(seatList).length) {
        this.seatList = seatList;
        console.log(this.seatList);
      }
    })
  }

  ngOnDestroy() {
    this.subService.unsubscribe();
  }
}
