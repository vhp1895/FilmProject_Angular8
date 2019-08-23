import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';
import { Subscription } from 'rxjs';
import { ShareDataService } from 'src/app/_core/shared/share-data.service';
import { MovieService } from 'src/app/_core/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  public nameCode: any;
  public movie: any;
  openDetail: boolean = false;
  subService: Subscription;

  activateDate: Date = new Date("2019-08-18");
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private shareDataService: ShareDataService,
    private movieService: MovieService) { }

  ngOnInit() {
    this.getParams();
    console.log(this.movie);
  }
  getMovieDetail() {
    this.movie = this.movieService.getMovie(this.nameCode);
  }

  
  chooseDate(date) {
    this.activateDate = date.activateDate;
  }
  getParams() {
    // Nhận 1 tham số
    this.nameCode = this.activatedRoute.snapshot.paramMap.get("nameCode");
    this.getMovieDetail();
  }

  compareDate(date) {
    let dte = new Date(date);
    return dte.getDate() === this.activateDate.getDate();
  }

  playTrailer() {
    this.shareDataService.sharingTrailer(this.movie.trailer);
  }

  ngOnDestroy() {
  }
}
