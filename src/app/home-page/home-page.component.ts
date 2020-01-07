import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users: String;

  sendMapStore(){
    this.router.navigate(['/', 'app-map']);
  }

  constructor(private route : ActivatedRoute, private router : Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe( data => {
      this.users = data[2].name + " ok";
    });
  }

}
