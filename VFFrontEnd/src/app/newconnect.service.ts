import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewconnectService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  createInquiry(newconnect : object): Observable<Object> {  
    console.log ("success");
    return this.http.post(`${this.baseUrl}`+'/createconnection', newconnect);
    } 
}