import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public innerWidth: any;
  constructor(public router: Router) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  getRoute() {
    if (this.router.url === "/account/register" || this.router.url === "/account/signin" || this.router.url.includes("booking-detail"))
      return true;
    else 
      return false;
  }

}
