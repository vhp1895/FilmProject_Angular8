import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Form, Validators } from '@angular/forms';
import { MovieService } from 'src/app/_core/services/movie.service';
import { ShareDataService } from 'src/app/_core/shared/share-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-book',
  templateUrl: './quick-book.component.html',
  styleUrls: ['./quick-book.component.scss']
})
export class QuickBookComponent implements OnInit {
  quickBookForm: FormGroup;
  Cinemas: any;
  queryCine: any;
  queryMovie: any;
  queryShowtime: any;
  showtimeCode: any;
  isOpen: boolean = false;
  theaterName: string;
  movieName: string;
  hour: string;
  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService,
    private shareDataService: ShareDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.quickBookForm = this.formBuilder.group({
      cinema: '',
      movie: '',
      date: '',
      showtime: '',
    })
    this.Cinemas = this.movieService.getShowtime();
    console.log(this.Cinemas);

  }
  get f() { return this.quickBookForm.controls; }

  bookNow() {
    let hallInfo = {
      movieName: this.movieName,
      theaterName: this.theaterName,
      showtime: this.hour
    }
    this.shareDataService.sharingHallInfo(hallInfo);
    this.router.navigate(['booking-detail'], {queryParams: {code:this.showtimeCode}});
  }

  toggle(value) {
    if(window.innerWidth < 1024) {
      if(value)
      this.isOpen = true;
    else
      this.isOpen = false;
    }
  }

  chooseCine(source) {
    for (let i = 0; i < this.Cinemas.length; i++) {
      if (this.Cinemas[i].theaterCode === source.value) {
        this.queryCine = this.Cinemas[i];
        this.theaterName = this.Cinemas[i].theaterName;
        console.log('queryCine', this.queryCine);
        console.log('theaterName', this.theaterName);
        break;
      }
    }
  }
  chooseMovie(source) {
    for (let i = 0; i < this.queryCine.movieList.length; i++) {
      if (this.queryCine.movieList[i].movieName === source.value) {
        this.queryMovie = this.queryCine.movieList[i];
        this.movieName = this.queryCine.movieList[i].movieName;
        console.log(this.queryMovie);
        console.log('movieName', this.movieName);
        break;
      }
    }
  }
  chooseDate(source) {
    for (let i = 0; i < this.queryMovie.showtimes.length; i++) {
      if (this.queryMovie.showtimes[i].date === source.value) {
        this.queryShowtime = this.queryMovie.showtimes[i].showtime;
        console.log(this.queryShowtime);
        break;
      }
    }
  }
  chooseShowtime(source) {
    for (let i = 0; i < this.queryShowtime.length; i++) {
      if (this.queryShowtime[i].showtimeCode === source.value) {
        this.showtimeCode = this.queryShowtime[i].showtimeCode;
        this.hour = this.queryShowtime[i].hour;
        console.log(this.showtimeCode);
        console.log('hour', this.hour);
        break;
      }
    }
  }
}
