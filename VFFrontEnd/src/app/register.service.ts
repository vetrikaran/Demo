import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private userUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  public createCustomer(register1: object): Observable<object>{
    console.log ("success");
    return this.http.post(`${this.userUrl}`+'/createcustomer', register1);
  }

  createlogin(homedata: object): Observable<object> //This is for login purpose
  { console.log ("success");
    return this.http.post(`${this.userUrl}`+'/addlogdetails', homedata);
    }

    getLoginList(): Observable<any> {

      return this.http.get(`${this.userUrl}`+'/get'); //will change
  
    }
}

//localhost:8081/createcustomer
