import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.css']
})
export class ArchivedComponent implements OnInit {

  sendArchivedSite(){
    this.router.navigate(['/archive', 'app-map']);
  }

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
  }

}
