import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { Photo } from './photo';

@Injectable()
export class PhotoService {

  constructor(private http: Http) { }

  getPhotos():Observable<Photo[]> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .map(function (data) {
        return data.json();
      })
      .delay(5000);
  }

  getPhoto(id: number): Observable<Photo> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/photos/' + id)
      .map(data => data.json());
  }
}
