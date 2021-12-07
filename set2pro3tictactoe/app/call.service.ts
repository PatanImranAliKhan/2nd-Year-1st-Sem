import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Klu } from '../app/exception/Klu';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  public url = '/assets/emp.json';
  constructor(private http: HttpClient) { }

  public details(): Observable<Klu[]>
  {
    return this.http.get<Klu[]>(this.url);
  }
}
