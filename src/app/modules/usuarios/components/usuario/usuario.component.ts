import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { UserService } from '../../user.service';

import showToast from 'src/app/helpers/toast';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {

  keys = [
    'id',
    'name',
    'lastname',
    'email',
    'address',
    'city',
    'state',
    'username',
    'password',
  ];

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });
  checkedForm = true;


  user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private alertController: AlertController
    ) {

  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUser(params.id).subscribe(({ result }) => {
        this.user = result;
        this.cargarDatos(this.user);
      });
    });


   }

  setValue(key, value) {
    this.form.get(key).setValue(value);
  }

  cargarDatos(datos) {
    this.keys.map(x => {
      this.setValue(x, datos[x]);
    });
  }

  handleChange() {
    this.checkedForm = !this.checkedForm;
  }

  actualizar() {
    const datos = this.form.value;
    this.userService.update(datos).subscribe(({statusCode})=> {
      if (statusCode === 200){
        showToast({message: `Usuario actualizado correctamente.`, type: 'success'});
          this.router.navigateByUrl('/usuarios');
      } else {
        showToast({message: `Hubo un error al actualizar. Intente nuevamente.`, type: 'error'});
      }
    });
  }

  eliminarUsuario() {
    const datos = this.form.value;
    this.userService.delete(datos.id).subscribe(({statusCode})=> {
      if (statusCode === 200){
        showToast({message: `Usuario eliminado correctamente.`, type: 'success'});
          this.router.navigateByUrl('/usuarios');
      } else {
        showToast({message: `Hubo un error. Intente nuevamente.`, type: 'error'});
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Eliminar este usuario!',
      subHeader: 'Estas seguro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => { },
        },
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
            this.eliminarUsuario();
          },
        },
      ],
    });

    await alert.present();

  }


}
