import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  login(username: string,password: string): Observable<String> {
  
    return this.http.get<String>(`http://localhost:3000/login?firstname=${username}&password=${password}`);
  }


  // login(usrename: any,password: any){

  //   return this.http.get(`${baseUrl}/login?firstname=${usrename}&password=${password}`);
  // }
}
