import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  arrayUsuarios = [
    {
      id: 1,
      nombre: 'Carlos',
      apellido: 'Lopez',
      documento: '1023654',
      domicilio: 'Sarmiento 2525',
      localidad: 'Esperanza',
      provincia: 'Santa Fe',
      nombreUsuario: 'lcarlos'
    },
    {
      id: 2,
      nombre: 'Pedro',
      apellido: 'Argel',
      documento: '1023654',
      domicilio: 'San Martin 2525',
      localidad: 'Esperanza',
      provincia: 'Santa Fe',
      nombreUsuario: 'apedro'
    },
    {
      id: 3,
      nombre: 'Alexis',
      apellido: 'Dorrego',
      documento: '1023654',
      domicilio: 'Donnet 2525',
      localidad: 'Esperanza',
      provincia: 'Santa Fe',
      nombreUsuario: 'dalexis'
    },
];
usuarios = this.arrayUsuarios;

  constructor() { }

  handleSearch({target: { value }}) {
    this.usuarios = this.arrayUsuarios.filter(({nombre, apellido, nombreUsuario}) =>
    nombre.includes(value) || apellido.includes(value) || nombreUsuario.includes(value));
  }
  ngOnInit() {}

}
