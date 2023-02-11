/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API } from '../../constantes/API';

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


}
