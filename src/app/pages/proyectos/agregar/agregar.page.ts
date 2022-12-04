import showToast from 'src/app/helpers/toast';
import showLoading from 'src/app/helpers/loading';
import { StorageService } from './../../../services/storage/storage.service';
import { ProjectService } from './../../../services/projects/project.service';
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
});

constructor(
  private uiService: UiService,
  private router: Router,
  private projectService: ProjectService,
  private storageService: StorageService
  ) { }

  get nombre(): FormControl {
    return this.form.get('nombre') as FormControl;
  }

  getValue(key, { target: { value } }) {
    this.form.get(key).setValue(value);
  }
  ngOnInit() {
  }

  submit() {
    console.log('valor: ', this.form.value);
    this.saveData();
  }

  async saveData() {
      const proyecto = this.form.value;
      (await this.projectService.addNewProject(proyecto)).subscribe(
        (data) => {
          showLoading({ message: 'Enviando datos...', url: '/home', router: this.router });
          this.storageService.set('proyecto', data);
          showToast({message: `Proyecto creado correctamente`, type: 'success'});
        },
        ({ status }) => {
          showToast({ message: `Ha ocurrido un error- Status: ${status}`, type: 'error'});
        }
      );
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
