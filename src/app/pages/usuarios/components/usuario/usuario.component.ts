import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

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

  data: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.cargarDatos(this.usuario);
      // this.data = this.userService.getUser(1);
      // console.log(this.data.result);

    }

  setValue(key,value) {
    this.form.get(key).setValue(value);
  }

  cargarDatos(datos) {
    Object.keys(datos).map(x => {
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
