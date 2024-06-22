import { API } from '../../constantes/API';
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Response {
  result: any;
  statuscode: any;
}
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
    return this.http.get<Response>(`${API}/proyecto`);
  }

  getProject(id: string) {
    return this.http.get<Response>(`${API}/proyecto/${id}`);
  }

  update(datos: any) {
    return this.http.put(`${API}/proyecto/${datos.id}`, datos);
  }

  getTreesByProject(id: string) {
    return this.http.get<Response>(`${API}/proyecto/${id}/arboles`);
  }

  exportTreesToCSV(projectId: number): Observable<Blob> {
    return this.http.get(`${API}/arbol/export/csv/${projectId}`, {
      responseType: 'blob'
    });
  }
}
