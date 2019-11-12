import { Component, OnInit } from '@angular/core';
import {Map} from '../mapOb';
import {PRODUCTS} from '../productList';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  products = PRODUCTS;

  selectedProduct : Map;
  onSelect(mapP : Map): void{
    this.selectedProduct = mapP;
  }

  constructor() { }

  ngOnInit() {
  }

}
