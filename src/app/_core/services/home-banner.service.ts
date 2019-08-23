import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeBannerService {
  sliderList = [
    { TenPhim: "The Lion King", Length: "118 Minutes", Language: "English", ReleaseDate:"18th July 2019", Age: "assets/images/movie/age/P13.png", HinhAnh: "assets/images/home/banner/TheLionKing.jpeg" },
    { TenPhim: "Ti9 Pubstorm", Length: "720 Minutes", Language: "English", ReleaseDate:"25th Aug 2019", Age: "assets/images/movie/age/P13.png", HinhAnh: "assets/images/home/banner/Ti9.jpeg" },
    { TenPhim: "BoboiBoy Movie 2", Length: "118 Minutes", Language: "English", ReleaseDate:"8th Aug 2019", Age: "assets/images/movie/age/P13.png", HinhAnh: "assets/images/home/banner/Boboboy.jpeg" }
  ]
  constructor() { }

  getSliderList() {
    return this.sliderList;
  }
}
