import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  

  sendMapStore(){
    this.router.navigate(['/', 'app-map']);
  }

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
  }

}
