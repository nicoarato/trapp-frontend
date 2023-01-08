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
    return this.http.post(`${API}/user`, usuario);
  }

  getAllUsers() {
    return this.http.get(`${API}/user`);
  }

  getUser(id: number) {
    return this.http.get(`${API}/user/${id}`);
  }
}
