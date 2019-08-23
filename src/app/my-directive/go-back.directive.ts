import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';
import { Location } from '@angular/common';
@Directive({
  selector: '[appGoBack]'
})
export class GoBackDirective implements OnInit {

  constructor(private _location: Location) { }
  @HostListener('click', ['$event.target']) goBack() {
    this._location.back();
  }
  ngOnInit() {
    
  }
}
