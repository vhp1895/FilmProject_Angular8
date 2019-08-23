import { Component, OnInit, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sidebarOpen = false;
  constructor(private router: Router) { }
  name: String = "Your account";
  account: any;
  ngOnInit() {
    this.isLoggedIn();
    $(document).ready(function () {
      // Add smooth scrolling to all links
      $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 50) {
      let element = document.getElementById('header');
      element.classList.add('sticky');
    } else {
      let element = document.getElementById('header');
      element.classList.remove('sticky');
    }
  }
  getRouteAccount() {
    if (this.router.url === "/account/register" ||            this.router.url === "/account/signin" ||              this.router.url.indexOf('booking-detail') !== -1) 
      return true;
    else 
      return false;
  }
  getRouteInner() {
    if (this.router.url !== "/" && this.router.url !== "/account/register" && this.router.url !== "/account/signin") {
      return true;
    }
    else {
      return false;
    }
  }

  logOut() {
    localStorage.clear();
    this.account = {};
    window.location.reload();
  }
  isLoggedIn() {
    if (localStorage.getItem('user')) {
      this.account = JSON.parse(localStorage.getItem('user'));

      if (this.account.hoTen) {
        this.name = this.account.hoTen;
      }
    }
  }
  
}
