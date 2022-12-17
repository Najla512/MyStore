import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {proudctslist}from '../models/proudcts_list'

@Injectable({
  providedIn: 'root'
})
export class ProudtslistService {
 // public proudcts: proudctslist[]=[]
  constructor(private http: HttpClient) { 
    //this.getUsers()
   
  }
  getComments(): Observable<[]> {
    return this.http.get<[]>('https://localhost:3000/products'
    
    ,{
      headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'MyClientCert': '',        // This is empty
            'MyToken': ''              // This is empty
          }
        )
    });
  }

  getUsers():Observable<proudctslist[]>{
    console.log(this.http.get<proudctslist[]>('http://localhost:3000/products'))
    return this.http.get<proudctslist[]>('http://localhost:3000/products',{
      headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'MyClientCert': '',        // This is empty
            'MyToken': ''              // This is empty
          }
        )
    });
    
    

  }
}
