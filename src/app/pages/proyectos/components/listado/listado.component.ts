import { ProjectService } from './../../../../services/projects/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {

  listado: any;
  proyectos: any;
  constructor(private proyectoService: ProjectService) { }

  ngOnInit() {
   this.proyectoService.getAllProjects().subscribe(( data )=> {
    this.listado = data;
    this.proyectos = this.listado;
   });
  }

  handleSearch({target: {value}}) {
    this.listado = this.proyectos.filter(({nombre}) => nombre.includes(value) );
  }

}
