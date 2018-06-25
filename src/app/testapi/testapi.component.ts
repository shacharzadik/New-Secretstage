import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Artist } from '../Models/artist';
import { User } from '../Models/user';
import { Event } from '../Models/event';

@Component({
  selector: 'app-testapi',
  templateUrl: './testapi.component.html',
  styleUrls: ['./testapi.component.css']
})
export class TestapiComponent implements OnInit {

  events: Event[];
  users: User[];
  artists: Artist[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getAllArtists()
    .subscribe ( data => {
      this.artists = data;
      console.log('artists : ' , this.artists);
    });

    this.apiService.getAllEvents()
    .subscribe ( data => {
      this.events = data;
      console.log('events  : ' , this.events);
    });

    this.apiService.getAllUsers()
    .subscribe ( data => {
      this.users = data;
      console.log('users : ', this.users);
    });

  }




}
