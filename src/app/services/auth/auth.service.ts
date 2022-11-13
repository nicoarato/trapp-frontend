import { User, NewUser } from './../../interfaces/users.interface';
import { API } from './../../constantes/API';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(user: User) {
    return this.http.post(`${API}/login`, user);
  }

  addNewUser(user: NewUser){
    return this.http.post(`${API}/user`, user);
  }
}
