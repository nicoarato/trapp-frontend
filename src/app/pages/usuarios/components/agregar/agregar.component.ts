import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UserService } from './../../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import showToast from 'src/app/helpers/toast';
import showLoading from 'src/app/helpers/loading';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {

  form: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    documento: new FormControl('', [Validators.required]),
    domicilio: new FormControl('', [Validators.required]),
    localidad: new FormControl('', [Validators.required]),
    provincia: new FormControl('', [Validators.required]),
    nombreUsuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required]),
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private storageService: StorageService
    ) { }

  ngOnInit() {}

  async saveData() {
    const user = this.form.value;
    (await this.userService.addNewUser(user)).subscribe(
      (data) => {
        showLoading({ message: 'Enviando datos...', url: '/home', router: this.router });
        this.storageService.set('proyecto', data);
        showToast({message: `Usuario creado correctamente`, type: 'success'});
      },
      ({ status }) => {
        showToast({ message: `Ha ocurrido un error- Status: ${status}`, type: 'error'});
      }
    );
}

}
