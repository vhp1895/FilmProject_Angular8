import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o'
import { Subscription } from 'rxjs';
import { ShareDataService } from 'src/app/_core/shared/share-data.service';
@Component({
  selector: 'app-movie-type',
  templateUrl: './movie-type.component.html',
  styleUrls: ['./movie-type.component.scss']
})
export class MovieTypeComponent implements OnInit, DoCheck {
  nowShowingStatus: boolean = true;
  subService_1: Subscription;
  subService_2: Subscription;
  filmList: any[] = [];
  nowShowingList: any[] = [];
  comingSoonList: any[] = [];
  constructor(
    public router: Router,
    private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.getMovieList();
  }
  getMovieList() {
    this.subService_1 = this.shareDataService.shareNowShowingList.subscribe(data => {
      this.nowShowingList = data;
      this.filmList = data;
    });
    this.subService_2 = this.shareDataService.shareComingSoonList.subscribe(data => {
      this.comingSoonList = data;
    })
  }
  ngDoCheck() {
    if (this.nowShowingStatus) {
      this.filmList = this.nowShowingList;
    }
    else {
      this.filmList = this.comingSoonList;
    }
  }
  showNowShowing() {
    this.nowShowingStatus = true;
  }
  showComingSoon() {
    this.nowShowingStatus = false;
  }
  customOptions: OwlOptions = {
    stagePadding: 100,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    navText: ["<button class='owl-prev owl-arrow'></button>", "<button class='owl-next owl-arrow'></button>"],
    nav: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 70
      },
      600: {
        items: 2,
        stagePadding: 60
      },
      991: {
        items: 3
      },
      1279: {
        items: 4
      },
      1679: {
        items: 5
      }
    },
  }
}
