import { Component, OnInit } from '@angular/core';
import { DataService } from '../_core/services/data.service';
import { ShareDataService } from '../_core/shared/share-data.service';
import { Subscription } from 'rxjs';
import { MovieService } from '../_core/services/movie.service';
import { Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-web-phim',
  templateUrl: './web-phim.component.html',
  styleUrls: ['./web-phim.component.scss']
})
export class WebPhimComponent implements OnInit {
  subMovieList: Subscription;
  today = new Date("2019-08-18T00:00:01");
  movieList = [];
  nowShowingList = [];
  comingSoonList = [];

  constructor(
    private dataService: DataService,
    private shareDataService: ShareDataService,
    private movieService: MovieService,
    private router: Router) { }

  ngOnInit() {
    this.getMovieList();
    if (!this.router.url.includes('booking-detail')) {
      if (localStorage.getItem('orderDetails') ||
          localStorage.getItem('OrderDetails') ||
          localStorage.getItem('listSelectingSeat') ||
          localStorage.getItem('showtimeCode')) 
      {
        localStorage.removeItem('orderDetails')
        localStorage.removeItem('OrderDetails');
        localStorage.removeItem('listSelectingSeat');
        localStorage.removeItem('showtimeCode');
      }

    }

  }

  getMovieList() {
    this.movieService.getMovieList().forEach(movie => {
      let releaseDate = new Date(movie.releaseDate);
      if (releaseDate > this.today)
        this.comingSoonList.push(movie);
      else
        this.nowShowingList.push(movie);
    })
    console.log('coming Soon', this.nowShowingList);
    console.log('now showing', this.comingSoonList);
    this.shareDataService.sharingNowShowingList(this.nowShowingList);
    this.shareDataService.sharingComingSoonList(this.comingSoonList);

  }
}
