import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient){}

  register(user:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/auth/registrarUsuario`, user)
  }
  
  // Método para hacer login y obtener el token
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }
  
}
