import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/modules/utils/storage.service';
import { UserService } from '../../user.service';
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
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rol: new FormControl(2, [Validators.required]),
    state: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private storageService: StorageService
    ) { }

  ngOnInit() {}

  async saveData() {
    const user = this.form.value;
    console.log('user: ', user);
    (await this.userService.addNewUser(user)).subscribe(
      (data) => {
        showLoading({ message: 'Enviando datos...', url: '/home', router: this.router });
        this.storageService.set('newUser', data);
        showToast({message: `Usuario creado correctamente`, type: 'success'});
      },
      (e) => {

        if(e.status === 409) {
          showToast({ message: `Error inesperado`, type: 'error'});
        }else {
          showToast({ message: `El nombre de usuario ya existe`, type: 'error'});
        }
      }
    );
}

}
