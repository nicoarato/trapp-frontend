import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    documento: new FormControl('', [Validators.required]),
    domicilio: new FormControl('', [Validators.required]),
    localidad: new FormControl('', [Validators.required]),
    provincia: new FormControl('', [Validators.required]),
    nombreUsuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  checkedForm = true;

  usuario = {
    id: 3,
    nombre: 'Alexis',
    apellido: 'Dorrego',
    documento: '1023654',
    domicilio: 'Donnet 2525',
    localidad: 'Esperanza',
    provincia: 'Santa Fe',
    nombreUsuario: 'dalexis',
    password: 'holamundo',
  };

  constructor() { }

  ngOnInit() {
      this.cargarDatos(this.usuario);
    }

  setValue(key,value) {
    this.form.get(key).setValue(value);
  }

  cargarDatos(datos) {
    Object.keys(datos).map(x => {
      console.log(datos[x])
      this.setValue(x, datos[x]);
    });
  }

  handleChange() {
    this.checkedForm = !this.checkedForm;
  }

  guardar() {
    console.log(this.form.value);
  }


}
