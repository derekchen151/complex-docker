import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  postIndex(index: number) {
    return this.http.post('/api/values', {value: index});
  }

  getCurrentValue() {
    return this.http.get('/api/values/current');
  }

  getAllIndexes() {
    return this.http.get('/api/values/all');
  }
}
