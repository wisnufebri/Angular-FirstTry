import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/item';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/getItemById/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/item/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/item/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}/item`);
  }

  findByTitle(nama): Observable<any> {
    return this.http.get(`${baseUrl}/nama=${nama}`);
  }
}

