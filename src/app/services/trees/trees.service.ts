/* eslint-disable @typescript-eslint/naming-convention */
import { API } from './../../constantes/API';
import { StorageService } from './../storage/storage.service';
import { UserLogin } from './../../interfaces/users.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../modules/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TreesService {
  private auth: UserLogin;

  constructor(
    private http: HttpClient,
    private storageService: StorageService) { }

    async addNewTree(arbol: any) {

    return this.http.post(`${API}arbol`, arbol);
  }

  getAllTrees() {
    return this.http.get(`${API}arbol`);
  }


}
