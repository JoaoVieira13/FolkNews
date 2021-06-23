import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LandingServiceService {
  constructor(private http: HttpClient) {}

  getPopular() {
    return this.http.get('http://www.publico.pt/api/list/ultimas');
  }
}
