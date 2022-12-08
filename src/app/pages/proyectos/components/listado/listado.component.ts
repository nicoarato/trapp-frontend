import { ProjectService } from './../../../../services/projects/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {

  listado: any;
  constructor(private proyectoService: ProjectService) { }

  ngOnInit() {
   this.proyectoService.getAllProjects().subscribe(( data )=> {
    this.listado = data;
   });
  }

}
