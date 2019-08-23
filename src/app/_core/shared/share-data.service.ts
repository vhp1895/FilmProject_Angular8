import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  comingSoonList = new BehaviorSubject([] as any);
  shareComingSoonList = this.comingSoonList.asObservable();

  nowShowingList = new BehaviorSubject([] as any);
  shareNowShowingList = this.nowShowingList.asObservable();

  MovieDetail = new BehaviorSubject({} as Object);
  shareMovieDetail = this.MovieDetail.asObservable();

  hallInfo = new BehaviorSubject({} as Object);
  shareHallInfo = this.hallInfo.asObservable();

  seatList = new BehaviorSubject({} as Object);
  shareSeatList = this.seatList.asObservable();

  trailer = new BehaviorSubject({} as Object);
  shareTrailer = this.trailer.asObservable();

  orderDetail = new BehaviorSubject({} as Object);
  shareOrderDetail = this.orderDetail.asObservable();

  constructor() {}

  sharingOrderDetail(orderDetail) {
    this.orderDetail.next(orderDetail)
  }

  sharingHallInfo(hallInfo) {
    this.hallInfo.next(hallInfo)
  }

  sharingSeatList(seatList) {
    this.seatList.next(seatList);
  }

  sharingTrailer(trailer) {
    this.trailer.next(trailer)
  }

  sharingComingSoonList(listComingSoon) {
    this.comingSoonList.next(listComingSoon)
  }

  sharingNowShowingList(listNowShowing) {
    this.nowShowingList.next(listNowShowing)
  }
  
  sharingDataMovieDetail(phim) {
    this.MovieDetail.next(phim);
  }
}