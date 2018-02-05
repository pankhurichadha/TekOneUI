import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Details } from './details.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private _userDetailsURL = '../assets/userdetails.json';
  constructor(private _http: HttpClient) { }
  getInfo(): Observable<Details> {
    return this._http.get<Details>(this._userDetailsURL);

  }
}
