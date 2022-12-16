import { API } from './../../constantes/API';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  async addNewUser(usuario: any) {
    return this.http.post(`${API}/usuarios`, usuario);
  }

  getAllUsers() {
    return this.http.get(`${API}/usuarios`);
  }
}
