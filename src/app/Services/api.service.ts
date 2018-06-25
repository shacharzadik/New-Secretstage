import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {User} from '../Models/user';
import {Event} from '../Models/event';
import {Artist} from '../Models/artist';

@Injectable()
export class ApiService {

  private  events = '/api/events/';
  private  artists = '/api/artists/';
  private  users = '/api/users/';

  constructor(private http: HttpClient) { }

// Event API Calls
  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.events);
  }

  addEvent(event): Observable<Event> {
    return this.http.post<Event>(this.events, event);
  }

// User API Calls
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.users);
  }

  addUser(user): Observable<User> {
    return this.http.post<User>(this.users, user);
  }

// Artist API Calls
  getAllArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artists);
  }

  addArtist(artist): Observable<Artist> {
    return this.http.post<Artist>(this.artists, artist);
  }

}
