import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/app/_core/shared/share-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-showtime',
  templateUrl: './button-showtime.component.html',
  styleUrls: ['./button-showtime.component.scss']
})
export class ButtonShowtimeComponent implements OnInit {
  @Input() showtime;
  @Input() theaterName;
  @Input() movieName;
  constructor(
    private shareDataService: ShareDataService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  toHall() {
    let hallInfo = {
      movieName: this.movieName,
      theaterName: this.theaterName,
      showtime: this.showtime.hour
    }
    this.shareDataService.sharingHallInfo(hallInfo);
    this.router.navigate(['booking-detail'], {queryParams: {code:this.showtime.showtimeCode}});
  }
}
