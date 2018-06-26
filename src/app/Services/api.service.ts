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

  getEvent(event_id): Observable<Event> {
    return this.http.get<Event>(this.events + event_id);
  }

// User API Calls
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.users);
  }

  addUser(user): Observable<User> {
    return this.http.post<User>(this.users, user);
  }

  getUser(user_id): Observable<User> {
    return this.http.get<User>(this.users + user_id);
  }

// Artist API Calls
  getAllArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artists);
  }

  addArtist(artist): Observable<Artist> {
    return this.http.post<Artist>(this.artists, artist);
  }
  getArtist(artist_id): Observable<Artist> {
    return this.http.get<Artist>(this.artists + artist_id);
  }

}
