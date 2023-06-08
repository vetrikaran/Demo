import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechargeserService {

  private userUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  createRecharge(recharge: object): Observable<object>
  { 
    console.log ("success");
    return this.http.post(`${this.userUrl}`+'/createrecharge', recharge);
    
  }

}
