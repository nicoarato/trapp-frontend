/* eslint-disable @typescript-eslint/naming-convention */
import { API } from './../../constantes/API';
import { StorageService } from './../storage/storage.service';
import { UserLogin } from './../../interfaces/users.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TreesService {
  private user: UserLogin;

  constructor(
    private http: HttpClient,
    private storageService: StorageService) { }

    async addNewTree(arbol: any) {
      this.user = await this.storageService.get('user');
      const options = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.user.token}`,
      })
    };
    return this.http.post(API, arbol, options);
  }

  getAllTrees() {
    return this.http.get(API);
  }


}
