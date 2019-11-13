import { Component, OnInit } from '@angular/core';
import {Map} from '../mapOb';
import {PLANTS} from '../plantList';

@Component({
  selector: 'app-botany-display',
  templateUrl: './botany-display.component.html',
  styleUrls: ['./botany-display.component.css']
})
export class BotanyDisplayComponent implements OnInit {

  products = PLANTS;

  selectedProduct : Map;
  onSelect(mapP : Map): void{
    this.selectedProduct = mapP;
  }

  constructor() { }

  ngOnInit() {
  }

}
