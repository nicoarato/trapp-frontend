import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import showToast from 'src/app/helpers/toast';
import showLoading from 'src/app/helpers/loading';
import { UiService } from './../../../../modules/utils/ui.service';
import { ProjectService } from './../../../../services/projects/project.service';
import { StorageService } from './../../../../services/storage/storage.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {

  form: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    localidad: new FormControl('', [Validators.required, Validators.minLength(3)]),
    provincia: new FormControl('', [Validators.required, Validators.minLength(3)]),
    tiempoEstimado: new FormControl('', [Validators.required, Validators.min(0)]),
});

constructor(
  private uiService: UiService,
  private router: Router,
  private projectService: ProjectService,
  private storageService: StorageService
  ) { }

  ngOnInit() {
  }

  submit() {
    const keys = Object.keys(this.form.value);
    keys.map(k => { if (typeof this.form.value[k] === 'string') {
      this.form.value[k] = this.form.value[k].toUpperCase();
    }});
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

}
