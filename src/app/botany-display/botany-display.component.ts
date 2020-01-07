import { Component, OnInit } from '@angular/core';
import {Map} from '../mapOb';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from '../plant.service';
import { PopupService } from '@ng-bootstrap/ng-bootstrap/util/popup';

@Component({
  selector: 'app-botany-display',
  templateUrl: './botany-display.component.html',
  styleUrls: ['./botany-display.component.css']
})
export class BotanyDisplayComponent implements OnInit {

  products;
  msg : String;
  selectedProduct : Map;
  onSelect(mapP : Map): void{
    this.selectedProduct = mapP;
  }

  sendPlantStore(){
    this.router.navigate(['/plants', 'app-map']);
  }


  constructor(private route : ActivatedRoute, private router : Router, private plantService: PlantService) { }

  ngOnInit() {
    this.plantService.getPlants()
    .subscribe( data => {
      this.products = data;
    });
  }

  updateDisplay(id: number, change: number){
    this.products[id-1].quantity = this.products[id-1].quantity + change;
  }

  purchaseP(id : number){
    this.plantService.purchasePlant(id)
    .subscribe( data => {
      this.msg = data;
    });
    this.updateDisplay(id, -1);
  }

  addP(id : number){
    this.plantService.addPlant(id)
    .subscribe( data => {
      this.msg = data;
    });
    this.updateDisplay(id, 1);
  }

}
