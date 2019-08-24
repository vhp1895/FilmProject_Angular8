import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from "@angular/router";
import { ShareDataService } from "src/app/_core/shared/share-data.service";
import * as $ from "jquery";
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() MovieItem;
  path: any;
  constructor(
    private router: Router,
    private shareDataService: ShareDataService
  ) { }

  ngOnInit() {
    this.responsivePath();
  }

  playTrailer() {
    this.shareDataService.sharingTrailer(this.MovieItem.trailer);
    console.log('aloha')
  }
  responsivePath () {
    let innerWidth = window.innerWidth;
    this.path = document.getElementsByClassName('line2');
    for(let i = 0; i < this.path.length; i++) {
      if(innerWidth < 480)
        this.path[i].setAttribute("d", "M 3 0 l 135 0 l -12 42 l -123 0 l 0 -42")
      else if (innerWidth < 600)
        this.path[i].setAttribute("d", "M 0 0 l 190 0 l -12 42 l -178 0 l 0 -42")
      else if (innerWidth < 768)
        this.path[i].setAttribute("d", "M 0 0 l 190 0 l -12 48 l -178 0 l 0 -48")
      else if (innerWidth < 1280)
        this.path[i].setAttribute("d", "M 0 0 l 213 0 l -12 48 l -201 0 l 0 -48")
      else if (innerWidth < 1600)
        this.path[i].setAttribute("d", "M 0 0 l 217 0 l -12 48 l -205 0 l 0 -48")
      else if (innerWidth < 1680)
        this.path[i].setAttribute("d", "M 0 0 l 217 0 l -12 54 l -205 0 l 0 -54")
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let innerWidth = window.innerWidth;
    for(let i = 0; i < this.path.length; i++) {
      if(innerWidth < 480)
        this.path[i].setAttribute("d", "M 3 0 l 135 0 l -12 42 l -123 0 l 0 -42")
      else if (innerWidth < 600)
        this.path[i].setAttribute("d", "M 0 0 l 190 0 l -12 42 l -178 0 l 0 -42")
      else if (innerWidth < 768)
        this.path[i].setAttribute("d", "M 0 0 l 190 0 l -12 48 l -178 0 l 0 -48")
      else if (innerWidth < 1280)
        this.path[i].setAttribute("d", "M 0 0 l 213 0 l -12 48 l -201 0 l 0 -48")
      else if (innerWidth < 1600)
        this.path[i].setAttribute("d", "M 0 0 l 217 0 l -12 48 l -205 0 l 0 -48")
      else if (innerWidth < 1680)
        this.path[i].setAttribute("d", "M 0 0 l 217 0 l -12 54 l -205 0 l 0 -54")
    }
  }
  
}

