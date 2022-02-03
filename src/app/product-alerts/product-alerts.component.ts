import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}

import { Product } from '../products';
