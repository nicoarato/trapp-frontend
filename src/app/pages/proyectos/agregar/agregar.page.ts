import { Router } from '@angular/router';
import { UiService } from './../../../modules/utils/ui.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  form: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    localidad: new FormControl(''),
    detalles: new FormControl(''),
    duracionEstimadaEnHoras: new FormControl(''),
});

constructor(
  private uiService: UiService,
  private router: Router,
  ) { }

  get nombre(): FormControl {
    return this.form.get('nombre') as FormControl;
  }

  ngOnInit() {
  }

  createProject() {
    // if (this.form.valid) {
    //     this.uiService.cargando(true);
    //     this.authService
    //         .login(this.form.value.username, this.form.value.password)
    //         .subscribe(
    //             (value) => {
    //                 this.uiService.cargando(false).then(() => {
                        this.router.navigateByUrl('/arboles/agregar');
    //                 });
    //             },
    //             (error) => {
    //                 this.uiService.cargando(false);
    //                 this.uiService.alerta(
    //                     'Credenciales incorrectas.',
    //                     'Error'
    //                 );
    //             }
    //         );
    // }
}

}
