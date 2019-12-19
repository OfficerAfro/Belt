import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _httpClient : HttpClient;

  constructor(httpClient : HttpClient) { 

    this._httpClient = httpClient;
  }
  getAll(): Observable<any> {
    return this._httpClient.get("/rests");
  }
  getOneRest(_id : string) : Observable<any> {
    return this._httpClient.get(`/rests/${_id}`);
  }
  create(newRest): Observable<any> {
    return this._httpClient.post("/rests", newRest);
  }
  review(_id: string, review: any): Observable<any>{
    return this._httpClient.post(`/review/${_id}`, review);
  }
  done(_id : string) : Observable<any> {
    return this._httpClient.delete(`/rests/${_id}`);
  }
  updateRest(_id, rest) {
    return this._httpClient.put(`/rests/${_id}`, rest);
  }
}
