import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { ShareDataService } from "src/app/_core/shared/share-data.service";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() MovieItem;
  constructor(
    private router: Router,
    private shareDataService: ShareDataService
  ) { }

  ngOnInit() {

  }

  playTrailer() {
    this.shareDataService.sharingTrailer(this.MovieItem.trailer);
    console.log('aloha')
  }

}
