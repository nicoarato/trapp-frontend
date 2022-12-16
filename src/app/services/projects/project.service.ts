import { API } from './../../constantes/API';
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient,
  ) { }

  async addNewProject(proyecto: any) {
  return this.http.post(`${API}/proyecto`, proyecto);
  }

  getAllProjects() {
    return this.http.get(`${API}/proyecto`);
  }
}
