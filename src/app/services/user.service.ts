import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:4200';


  constructor(private http: HttpClient) {
    
  }
  
 // Log in
 
 logIn(username: string, password: string): Observable<User> {
  const body = { username, password };
  const url = `${this.apiUrl}/login`;
  return this.http.post<any>(url, body);
}



}
