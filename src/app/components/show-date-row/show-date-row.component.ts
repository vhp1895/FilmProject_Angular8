import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-show-date-row',
  templateUrl: './show-date-row.component.html',
  styleUrls: ['./show-date-row.component.scss']
})
export class ShowDateRowComponent implements OnInit {
  @Output() activateDate = new EventEmitter();
  today: Date = new Date("2019-08-17");
  weekDates: Date[] = [];
  chosenDate: Date = new Date("2019-08-18");
  constructor() { }

  ngOnInit() {
    this.setWeekDates();
  }
  setWeekDates() {
    let date: Date = new Date(this.today);
    for (let i = 1; i < 8; i++) {
      this.weekDates[i - 1] = new Date(date.setDate(date.getDate() + 1));
    }
    console.log(this.weekDates);
  }
  chooseDate(date) {
    this.chosenDate = date;
    this.activateDate.emit({ activateDate: this.chosenDate });
  }
  slideConfig = {
    slidesToShow: 8,
    responsive: [
      { 
        breakpoint: 1023,
        settings: {
          slidesToShow: 6
        }
      },
      { 
        breakpoint: 767,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  }
}
