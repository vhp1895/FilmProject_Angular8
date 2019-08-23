import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-promo-item',
  templateUrl: './promo-item.component.html',
  styleUrls: ['./promo-item.component.scss']
})
export class PromoItemComponent implements OnInit {
  @Input() PromoItem;
  constructor() { }

  ngOnInit() {
  }

}
