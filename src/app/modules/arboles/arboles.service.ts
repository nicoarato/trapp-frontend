import { Observable } from 'rxjs';
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API } from '../../constantes/API';

interface Response {
  result: any;
  statuscode: any;
}

@Injectable({
  providedIn: 'root'
})
export class TreesService {

  constructor(
    private http: HttpClient
    ) { }

    async addNewTree(arbol: any) {

    return this.http.post(`${API}/arbol`, arbol);
  }

  getAllTrees() {
    return this.http.get(`${API}/arbol`);
  }

  getTreeById(id: number) {
    return this.http.get<Response>(`${API}/arbol/${id}`);
  }

  update(id: number, datos: any): Observable<any> {
    return this.http.patch<Response>(`${API}/arbol/${id}`, datos);
  }

}
