import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeBannerService } from 'src/app/_core/services/home-banner.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliderList = [];
  constructor(
    private homeBannerService: HomeBannerService
  ) { }

  ngOnInit() {
    this.sliderList = this.homeBannerService.getSliderList();
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }
}
