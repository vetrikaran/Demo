import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateinqserService {
  private baseUrl2 = 'http://localhost:8080/get-all-inquiry';
  private baseUrl1 = 'http://localhost:8080/create-inquiry';
  private baseUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { 

  }

  getInquiryList(): Observable<any> {  
    return this.http.get(this.baseUrl2);  
  }

   createInquiry(inquiry: object): Observable<Object> {  
    return this.http.post(this.baseUrl1, inquiry); 
    } 

    deleteInquiry(cust_id: any): Observable<any> {  
      return this.http.delete(`${this.baseUrl}/delete-inquiry/${cust_id}`, { responseType: 'text' });  
    }

    getInquiry(cust_id: any): Observable<Object> {  
      return this.http.get(`${this.baseUrl}/get-inquiry/${cust_id}`);  
    }

    updateInquiry(cust_id: any, value: any): Observable<Object> {  
      return this.http.post(`${this.baseUrl}/update-inquiry/${cust_id}`, value);  
    }

}  