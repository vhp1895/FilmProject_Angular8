import { Component, OnInit } from '@angular/core';
import { ShareDataService } from "src/app/_core/shared/share-data.service";
import * as $ from "jquery";
@Component({
  selector: 'app-modal-phim',
  templateUrl: './modal-phim.component.html',
  styleUrls: ['./modal-phim.component.scss']
})
export class ModalPhimComponent implements OnInit {
  trailer: any;
  constructor(private shareDataService: ShareDataService, ) {
  }

  ngOnInit() {
    this.shareDataService.shareTrailer.subscribe(data => {
      if(Object.entries(data).length) {
        this.trailer = data + "?autoplay=1";
        console.log('nhaan dc hay k nhan dc', this.trailer);
      }
    })
    // $("#trailerModal").on('click', ':not(.modal-content)', function (e) {
    //   e.stopPropagation();
    // });
  }

}
