import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plant } from './plant.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http:HttpClient) { }

  private plantPath = 'http://localhost:8080/plants/';

  public getPlants() {
    return this.http.get<Plant>(this.plantPath + 'findallplant');
  }

  public purchasePlant(id : number) {
    return this.http.get<String>(this.plantPath + 'subtract?id=' + id);
  }

  public addPlant(id : number) {
    return this.http.get<String>(this.plantPath + 'add?id=' + id);
  }

}
