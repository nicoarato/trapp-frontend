import { Observable } from 'rxjs';
import { API } from '../../constantes/API';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface Response {
  result: any;
  statuscode: any;
}

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
    return this.http.get<Response>(`${API}/user`);
  }

  getUser(id: number) {
    return this.http.get<Response>(`${API}/user/${id}`);
  }

  update(datos: any): Observable<any> {
    return this.http.patch(`${API}/user/${datos.id}`, datos);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${API}/user/${id}`);
  }
}
