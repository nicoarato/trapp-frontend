import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../proyecto.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {

  listado: any;
  proyectos: any[];

  constructor(private proyectoService: ProjectService) { }

  ngOnInit() {
   this.proyectoService.getAllProjects().subscribe(( data )=> {
    this.listado = data;
    this.proyectos = this.listado.result;
   });
  }

  handleSearch({target: { value }}) {
    this.proyectos = this.listado.result.filter(({nombre}) =>
    nombre.toLowerCase().includes(value.toLowerCase()));
  }

}
