import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';
declare var $: any;

@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.scss']
})
export class ShowtimesComponent implements OnInit {
  activateDate: Date = new Date("2019-08-18");
  showtimes:any;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.showtimes = this.movieService.getShowtime();
    console.log(this.showtimes);
  }

  compareDate(date) {
    let dte = new Date(date);
    return dte.getDate() === this.activateDate.getDate();
  }
  chooseDate(date) {
    this.activateDate = date.activateDate;
  }

}
