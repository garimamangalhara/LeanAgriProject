import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: Http) { }

  getPostsList(url): Observable<any> {
    return this.http.get(url).map(response => response.json())
  }

  createPost(url, template): Observable<any> {
    return this.http.post(url, template).map(response => response.json())
  }
  updatePost(url, template): Observable<any> {
    return this.http.put(url, template).map(response => response.json())
  }
}
