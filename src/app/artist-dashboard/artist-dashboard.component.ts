import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-dashboard',
  templateUrl: './artist-dashboard.component.html',
  styleUrls: ['./artist-dashboard.component.css']
})
export class ArtistDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Dashboard')
  }

}
