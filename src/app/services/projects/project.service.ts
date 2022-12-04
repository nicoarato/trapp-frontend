import { API } from './../../constantes/API';
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  auth: string;
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  async addNewProject(project: any) {
    this.auth = await this.storageService.get('auth.token');
      const options = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth}`,
      })
    };
    return this.http.post(`${API}proyecto`, project, options);
  }

  getAllProjects() {
    return this.http.get(`${API}proyecto`);
  }
}
